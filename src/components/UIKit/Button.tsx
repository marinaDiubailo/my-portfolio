import styled, { css } from 'styled-components';

type ButtonPropsType = {
    variant: 'primary' | 'secondary';
};

export const Button = styled.button<ButtonPropsType>`
    display: inline-flex;
    align-items: center;
    font-size: 20px;
    gap: 10px;
    padding: 20px 40px;
    line-height: 120%;
    border-radius: 10px;

    ${(props) =>
        props.variant === 'primary' &&
        css<ButtonPropsType>`
            background: #676cdb;

            &:hover {
                background: #4a51c9;
            }
        `}
    ${(props) =>
        props.variant === 'secondary' &&
        css<ButtonPropsType>`
            text-decoration-line: underline;

            &:hover {
                color: #4a51c9;

                svg {
                    stroke: #4a51c9;
                }
            }
        `}
`;
