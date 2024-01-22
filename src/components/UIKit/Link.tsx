import styled, { css } from 'styled-components';
import { theme } from '../../styles/Theme';

type LinkPropsType = {
    active?: boolean;
};

export const Link = styled.a<LinkPropsType>`
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    color: ${theme.colors.primary};
    line-height: 1.4;
    position: relative;
    text-transform: uppercase;
    font-size: 18px;
    z-index: 0;

    &::after {
        content: '';
        width: 100%;
        position: absolute;
        background: ${theme.colors.accent};
        bottom: 1px;
        height: 0;
        opacity: 0.8;
        left: 0;
        z-index: -1;
        transition: ${theme.animations.transition};
    }

    &:hover {
        &::after {
            height: 10px;
            opacity: 1;
        }
    }

    ${(props) =>
        props.active &&
        css<LinkPropsType>`
            &::after {
                height: 10px;
            }
        `}
`;
