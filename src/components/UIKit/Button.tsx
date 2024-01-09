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
                    stroke: currentColor;
                }
            }
        `}
`;

/*
${(props) =>
        props.sprite &&
        props.id &&
        css<ButtonPropsType>`
            &::before {
                content: '';
                display: inline-block;
                width: 20px;
                height: 20px;
                background-image: url(${(props) =>
                    props.sprite + '#' + props.id});
                background-size: cover;
                margin-right: 10px;

                &:hover {
                    stroke: #4a51c9;
                    fill: #4a51c9;
                }
            }
        `}


*/
