import styled, { css } from 'styled-components';
import { theme } from '../../styles/Theme';

type LinkPropsType = {
    upperCase?: boolean;
    normal?: boolean;
};
export const Link = styled.a<LinkPropsType>`
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    color: ${theme.colors.primary};
    line-height: 1.4;
    text-align: center;
    position: relative;

    ${(props) =>
        props.normal &&
        css<LinkPropsType>`
            &::after {
                content: '';
                width: 100%;
                position: absolute;
                background: ${theme.colors.accent};
                bottom: -5px;
                left: 0;
            }
            &:hover {
                &::after {
                    height: 10px;
                }
            }
        `}

    ${(props) =>
        props.upperCase &&
        css<LinkPropsType>`
            text-transform: uppercase;
            font-size: 18px;
        `}
`;
