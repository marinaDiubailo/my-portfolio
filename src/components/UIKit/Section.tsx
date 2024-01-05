import styled from 'styled-components';

type SectionPropsType = {
    bg?: string;
};
export const Section = styled.section<SectionPropsType>`
    background-color: ${(props) => props.bg || '#222A36'};
    padding: 50px 0;
`;
