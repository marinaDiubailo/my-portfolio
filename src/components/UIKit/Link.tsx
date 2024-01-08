import styled, { css } from 'styled-components';

type LinkPropsType = {
    upper?: boolean;
};
export const Link = styled.a<LinkPropsType>`
    color: white;
    font-size: 20px;
    font-weight: 500;
    position: relative;

    &:hover {
        &::after {
            content: '';
            width: 100%;
            height: 3px;
            position: absolute;
            background: #676cdb;
            bottom: -5px;
            left: 0;
        }
        opacity: 0.5;
    }

    ${(props) =>
        props.upper &&
        css<LinkPropsType>`
            text-transform: uppercase;
            font-size: 18px;
        `}
`;
