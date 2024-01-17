import { memo } from 'react';
import { FlexWrapper } from '../../../components/UIKit/FlexWrapper';
import { Link } from '../../../components/UIKit/Link';
import { SectionTitle } from '../../../components/UIKit/SectionTitle';
import { Project } from './project/Project';
import { PROJECTS_LINKS as links } from '../../../data/links';
import SocialNetwork from '../../../assets/images/social-network.webp';
import Clock from '../../../assets/images/25+5Clock.webp';
import { Container } from '../../../components/UIKit/Container';
import styled from 'styled-components';

const portfolio = [
    {
        id: 1,
        src: SocialNetwork,
        title: 'Social Network',
        description:
            'adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim',
    },
    {
        id: 2,
        src: Clock,
        title: '25+5 Clock',
        description:
            'adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim',
    },
];

export const Portfolio = memo(() => {
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
                        {links.map((link) => (
                            <li key={link.id}>
                                <Link href={link.href} upperCase normal>
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </FlexWrapper>
                </TabsContainer>
                <FlexWrapper
                    justify="space-between"
                    align="flex-start"
                    wrap="wrap"
                    gap="30px"
                >
                    {portfolio.map((project) => (
                        <Project
                            key={project.id}
                            src={project.src}
                            title={project.title}
                            description={project.description}
                        />
                    ))}
                </FlexWrapper>
            </Container>
        </section>
    );
});

const TabsContainer = styled.nav`
    margin-bottom: 30px;
`;
