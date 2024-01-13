import styled from 'styled-components';

type SectionPropsType = {
    bg?: string;
};
export const Section = styled.section<SectionPropsType>`
    background: ${(props) => props.bg || '#fffdf9'};
    outline: 2px solid green;
    padding: 100px 0;
    display: flex;
`;
