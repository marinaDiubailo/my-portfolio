import styled, { css } from 'styled-components';

type FlexWrapperPropsType = {
    direction?: string;
    justify?: string;
    align?: string;
    wrap?: string;
    gap?: string;
    width?: string;
    fullHeight?: boolean;
};

export const FlexWrapper = styled.div<FlexWrapperPropsType>`
    display: flex;
    // outline: 1px solid #e756d4;
    gap: ${(props) => props.gap || '0px'};
    width: ${(props) => props.width || '100%'};
    flex-direction: ${(props) => props.direction || 'row'};
    justify-content: ${(props) => props.justify || 'flex-start'};
    align-items: ${(props) => props.align || 'flex-start'};
    flex-wrap: ${(props) => props.wrap || 'no-wrap'};

    ${(props) =>
        props.fullHeight &&
        css<FlexWrapperPropsType>`
            height: 100%;
        `}
`;
