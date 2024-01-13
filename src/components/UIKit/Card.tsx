import styled from 'styled-components';
// import { theme } from '../../styles/Theme';

type CardPropsType = {
    gap?: string;
    border?: string;
    shadow?: string;
    padding?: string;
    radius?: string;
    width?: string;
};

export const Card = styled.div<CardPropsType>`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    background-color: white;
    max-width: ${(props) => props.width || '30%'};
    border-radius: ${(props) => props.radius || '10px'};
    padding: ${(props) => props.padding || '10px'};
    gap: ${(props) => props.gap || '10px'};
    border: ${(props) => props.border || 'none'};
    box-shadow: ${(props) =>
        props.shadow || '0px 5px 26px 10px rgba(187, 133, 255, 0.14)'};
`;
