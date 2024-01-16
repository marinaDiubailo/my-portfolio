import styled, { css } from 'styled-components';

type SubTitlePropsType = {
    transform?: 'capitalize' | 'uppercase';
};

export const SubTitle = styled.h3<SubTitlePropsType>`
    font-weight: 500;

    ${(props) =>
        props.transform === 'uppercase' &&
        css<SubTitlePropsType>`
            text-transform: uppercase;
        `}

    ${(props) =>
        props.transform === 'capitalize' &&
        css<SubTitlePropsType>`
            text-transform: capitalize;
        `}
`;
