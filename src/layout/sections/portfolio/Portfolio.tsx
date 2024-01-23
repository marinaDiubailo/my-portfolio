import { memo, useCallback, useState } from 'react';
import styled from 'styled-components';
import { FlexWrapper } from '../../../components/UIKit/FlexWrapper';
import { Link } from '../../../components/UIKit/Link';
import { Container } from '../../../components/UIKit/Container';
import { SectionTitle } from '../../../components/UIKit/SectionTitle';
import { Project } from './project/Project';
import { TABS as tabs, Tabs } from '../../../data/links';
import { Slider } from '../../../components/Slider/Slider';
import { portfolio } from '../../../data/portfolio';

export const Portfolio = memo(() => {
    const [filter, setFilter] = useState(Tabs.All);

    let filteredPortfolio;

    if (filter === Tabs.All) {
        filteredPortfolio = portfolio;
    } else {
        filteredPortfolio = portfolio.filter(
            (project) => project.type === filter,
        );
    }

    const changeFilterStatus = useCallback((name: Tabs) => {
        setFilter(name);
    }, []);

    return (
        <section id="portfolio">
            <Container>
                <SectionTitle>My Portfolio</SectionTitle>
                <TabsContainer>
                    <FlexWrapper
                        as="ul"
                        role="tablist"
                        justify="center"
                        align="center"
                        gap="30px"
                    >
                        {tabs.map((tab) => (
                            <li key={tab}>
                                <Link
                                    as="button"
                                    onClick={() => changeFilterStatus(tab)}
                                    active={tab === filter}
                                >
                                    {tab}
                                </Link>
                            </li>
                        ))}
                    </FlexWrapper>
                </TabsContainer>
                <Slider>
                    {filteredPortfolio.map((project) => (
                        <Project
                            key={project.id}
                            src={project.src}
                            title={project.title}
                            description={project.description}
                        />
                    ))}
                </Slider>
            </Container>
        </section>
    );
});

const TabsContainer = styled.nav`
    margin-bottom: 30px;
`;
