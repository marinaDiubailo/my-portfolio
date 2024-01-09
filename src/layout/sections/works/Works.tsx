import { memo } from 'react';
import { FlexWrapper } from '../../../components/UIKit/FlexWrapper';
import { Link } from '../../../components/UIKit/Link';
import { Section } from '../../../components/UIKit/Section';
import { SectionTitle } from '../../../components/UIKit/SectionTitle';
import { Work } from '../../../components/work/Work';
import { WORKS_LINKS as links } from '../../../data/links';
import SocialNetwork from '../../../assets/images/social-network.webp';
import Clock from '../../../assets/images/25+5Clock.webp';
import { Container } from '../../../components/UIKit/Container';

export const Works = memo(() => {
    return (
        <Section id="works">
            <Container>
                <FlexWrapper
                    direction="column"
                    justify="center"
                    align="center"
                    gap="10px"
                >
                    <SectionTitle underline>My Works</SectionTitle>
                    <FlexWrapper as="ul" gap="20px" justify="center">
                        {links.map((link) => (
                            <li key={link.id}>
                                <Link href={link.href} upper>
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </FlexWrapper>
                    <FlexWrapper justify="space-between" align="center">
                        <Work
                            src={SocialNetwork}
                            title="Social Network"
                            description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"
                        />
                        <Work
                            src={Clock}
                            title="25+5 Clock"
                            description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"
                        />
                    </FlexWrapper>
                </FlexWrapper>
            </Container>
        </Section>
    );
});
