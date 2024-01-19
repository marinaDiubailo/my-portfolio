import styled, { css } from 'styled-components';
import { theme } from '../../styles/Theme';

type LinkPropsType = {
    upperCase?: boolean;
    normal?: boolean;
    active?: boolean;
};
export const Link = styled.a<LinkPropsType>`
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    color: ${theme.colors.primary};
    line-height: 1.4;
    text-align: center;
    position: relative;
    z-index: 0;

    ${(props) =>
        props.normal &&
        css<LinkPropsType>`
            &::after {
                content: '';
                width: 100%;
                position: absolute;
                background: ${theme.colors.accent};
                bottom: 1px;
                opacity: 0.8;
                left: 0;
                z-index: -1;
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
        `}

    ${(props) =>
        props.upperCase &&
        css<LinkPropsType>`
            text-transform: uppercase;
            font-size: 18px;
        `}
`;
