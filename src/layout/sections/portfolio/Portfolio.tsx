import { memo, useCallback, useState } from 'react';
import styled from 'styled-components';
import { FlexWrapper } from '../../../components/UIKit/FlexWrapper';
import { Link } from '../../../components/UIKit/Link';
import { Container } from '../../../components/UIKit/Container';
import { SectionTitle } from '../../../components/UIKit/SectionTitle';
import { Project } from './project/Project';
import { ProjectTabType, TABS as tabs, Tabs } from '../../../data/links';
import Closing from '../../../assets/images/closing.jpg';
import Blog from '../../../assets/images/articlesBlog.jpg';
import OwlTop from '../../../assets/images/OwlTop.jpg';
import Clock from '../../../assets/images/25+5Clock.webp';
import { Slider } from '../../../components/Slider/Slider';

type ProjectType = {
    id: number;
    src: string;
    title: string;
    type: ProjectTabType;
    description: string;
};

const portfolio: ProjectType[] = [
    {
        id: 0,
        src: Blog,
        title: 'Articles Blog',
        type: Tabs.SPA,
        description:
            'React SPA, adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim',
    },
    {
        id: 1,
        src: Clock,
        title: '25+5 Clock',
        type: Tabs.React,
        description: 'Simple React application',
    },
    {
        id: 2,
        src: OwlTop,
        title: 'OwlTop Courses',
        type: Tabs.Next,
        description:
            'adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim',
    },
    {
        id: 3,
        src: Closing,
        title: 'Crown Closing',
        type: Tabs.SPA,
        description:
            'React SPA E-Commerse,adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim',
    },
];

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
                                    upperCase
                                    normal
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

/**
 * <FlexWrapper
                    justify="space-between"
                    align="flex-start"
                    wrap="wrap"
                    gap="30px"
                >
 */
