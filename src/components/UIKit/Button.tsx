import styled, { css } from 'styled-components';
import { theme } from '../../styles/Theme';

type ButtonPropsType = {
    variant: 'primary' | 'secondary';
};

export const Button = styled.button<ButtonPropsType>`
    display: inline-flex;
    align-items: center;
    gap: 10px;
    padding: 20px 40px;
    color: ${theme.colors.primary};

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
`;
