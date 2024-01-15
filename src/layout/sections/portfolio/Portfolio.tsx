import { memo } from 'react';
// import { theme } from '../../../styles/Theme';
import { FlexWrapper } from '../../../components/UIKit/FlexWrapper';
import { Link } from '../../../components/UIKit/Link';
import { SectionTitle } from '../../../components/UIKit/SectionTitle';
import { Project } from '../../../components/project/Project';
import { PROJECTS_LINKS as links } from '../../../data/links';
import SocialNetwork from '../../../assets/images/social-network.webp';
import Clock from '../../../assets/images/25+5Clock.webp';
import { Container } from '../../../components/UIKit/Container';
import styled from 'styled-components';

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
                >
                    <Project
                        src={SocialNetwork}
                        title="Social Network"
                        description="adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"
                    />
                    <Project
                        src={Clock}
                        title="25+5 Clock"
                        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"
                    />
                </FlexWrapper>
            </Container>
        </section>
    );
});

const TabsContainer = styled.nav`
    margin-bottom: 30px;
`;
