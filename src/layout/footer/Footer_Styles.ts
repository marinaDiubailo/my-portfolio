import styled from 'styled-components';
import { theme } from '../../styles/Theme';
import { font } from '../../styles/Common';

const Footer = styled.footer`
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

const SocialLink = styled.a`
    display: block;
    color: ${theme.colors.secondary};
    position: relative;
    z-index: 0;
    transition: ${theme.animations.transition};

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

export const S = {
    Footer,
    FooterTitle,
    SocialList,
    SocialLink,
    Copyright,
};
