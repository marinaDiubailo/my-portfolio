import styled, { css } from 'styled-components';
import { theme } from '../../styles/Theme';
import { font } from '../../styles/Common';

type ButtonPropsType = {
    variant: 'primary' | 'secondary';
};

export const Button = styled.button<ButtonPropsType>`
    display: inline-flex;
    border-radius: 5px;
    align-items: center;
    gap: 10px;
    padding: 20px 35px;
    ${font({
        color: theme.colors.primary,
        Fmin: 16,
        Fmax: 20,
    })};
    word-wrap: nowrap;
    transition: ${theme.animations.transition};

    &:active {
        position: relative;
        top: 2px;
    }

    ${(props) =>
        props.variant === 'primary' &&
        css<ButtonPropsType>`
            background-color: ${theme.colors.accent};

            &:hover {
                background-color: ${theme.colors.accentHover};
            }
        `}
    ${(props) =>
        props.variant === 'secondary' &&
        css<ButtonPropsType>`
            text-decoration-line: underline;

            &:hover {
                color: ${theme.colors.accentHover};

                svg {
                    stroke: currentColor;
                }
            }
        `};

    @media ${theme.media.tablet} {
        padding: 15px 20px;
    }
`;
