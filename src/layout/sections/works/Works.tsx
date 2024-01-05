import { memo } from 'react';
import { FlexWrapper } from '../../../components/UIKit/FlexWrapper';
import { Link } from '../../../components/UIKit/Link';
import { Section } from '../../../components/UIKit/Section';
import { SectionTitle } from '../../../components/UIKit/SectionTitle';
import { Work } from '../../../components/work/Work';
import { WORKS_LINKS as links } from '../../../data/links';
import SocialNetwork from '../../../assets/images/social-network.webp';
import Clock from '../../../assets/images/25+5Clock.webp';

export const Works = memo(() => {
    return (
        <Section bg="#222a36">
            <FlexWrapper
                direction="column"
                justify="center"
                width="1196px"
                margin="0 auto"
                align="center"
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
                <FlexWrapper justify="space-between" align="center" gap="20px">
                    <Work
                        src={SocialNetwork}
                        alt="Social network"
                        title="Social Network"
                        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"
                    />
                    <Work
                        src={Clock}
                        alt="25+5 Clock"
                        title="25+5 Clock"
                        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"
                    />
                </FlexWrapper>
            </FlexWrapper>
        </Section>
    );
});
