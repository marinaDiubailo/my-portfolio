import styled from 'styled-components';

type FlexWrapperPropsType = {
    direction?: string;
    justify?: string;
    align?: string;
    wrap?: string;
    margin?: string;
    width?: string;
    padding?: string;
    gap?: string;
};

export const FlexWrapper = styled.div<FlexWrapperPropsType>`
    display: flex;
    padding: ${(props) => props.padding || '0px'};
    gap: ${(props) => props.gap || '0px'};
    flex-direction: ${(props) => props.direction || 'row'};
    justify-content: ${(props) => props.justify || 'flex-start'};
    align-items: ${(props) => props.align || 'flex-start'};
    flex-wrap: ${(props) => props.wrap || 'wrap'};
    margin: ${(props) => props.margin || '0px'};
    width: ${(props) => props.width || '100%'};
`;
