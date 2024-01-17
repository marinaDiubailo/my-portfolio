import { memo } from 'react';
import styled from 'styled-components';
import { Container } from '../../components/UIKit/Container';
import { FlexWrapper } from '../../components/UIKit/FlexWrapper';
import { Icon } from '../../components/UIKit/Icon';
import socialSprite from '../../assets/icons/socialSprite.svg';
import { theme } from '../../styles/Theme';
import { font } from '../../styles/Common';

export const Footer = memo(() => {
    return (
        <StyledFooter>
            <Container>
                <FlexWrapper direction="column" align="center">
                    <FooterTitle>Let's be Friends</FooterTitle>
                    <SocialList>
                        <li>
                            <IconLink
                                href="https://github.com/marinaDiubailo"
                                target="_blank"
                                aria-label="Ссылка github"
                            >
                                <Icon
                                    sprite={socialSprite}
                                    id="github"
                                    width="50px"
                                    height="50px"
                                    viewBox="0 0 25 25"
                                />
                            </IconLink>
                        </li>
                        <li>
                            <IconLink
                                href="https://www.linkedin.com"
                                target="_blank"
                                aria-label="Ссылка linkedin"
                            >
                                <Icon
                                    sprite={socialSprite}
                                    id="linkedin"
                                    width="50px"
                                    height="50px"
                                    viewBox="0 0 24 24"
                                />
                            </IconLink>
                        </li>
                        <li>
                            <IconLink
                                href="https://t.me/marinadiubailo"
                                target="_blank"
                                aria-label="Ссылка telegram"
                            >
                                <Icon
                                    sprite={socialSprite}
                                    id="telegram"
                                    width="50px"
                                    height="50px"
                                    viewBox="2 0 19 19"
                                />
                            </IconLink>
                        </li>
                    </SocialList>
                    <Copyright>
                        © 2024 Made by Marina Diubailo | All rights reserved
                    </Copyright>
                </FlexWrapper>
            </Container>
        </StyledFooter>
    );
});

const StyledFooter = styled.footer`
    background-color: ${theme.bg.bgAccent};
    padding: 40px 0;
    display: flex;
`;

const FooterTitle = styled.span`
    ${font({
        Fmin: 26,
        Fmax: 40,
        weight: 700,
    })}
`;

const SocialList = styled.ul`
    display: flex;
    margin: 30px 0;

    li + li {
        margin-left: 40px;
    }
`;

const IconLink = styled.a`
    display: block;
    color: ${theme.colors.secondary};
    position: relative;
    z-index: 0;
    transition: all 0.2s ease 0s;

    &:hover {
        transform: scale(1.3);
        color: ${theme.colors.accent};

        &::before {
            content: '';
            position: absolute;
            display: inline-block;
            width: 80px;
            height: 80px;
            background-color: ${theme.colors.primary};
            opacity: 0.6;
            filter: blur(60px);
            transform: rotate(45deg) translate(-50%, -50%);
            left: 50%;
            top: 50%;
            transform-origin: top left;
            z-index: -1;
        }
    }
`;

const Copyright = styled.small`
    ${font({
        color: theme.colors.secondary,
        Fmin: 12,
        Fmax: 18,
    })}
    text-align: center;
`;
