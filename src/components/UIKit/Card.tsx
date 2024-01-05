import styled from 'styled-components';

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
    background-color: #222a36;
    align-items: center;
    max-width: ${(props) => props.width || '30%'};
    margin-bottom: 30px;
    border-radius: ${(props) => props.radius || '10px'};
    padding: ${(props) => props.padding || '10px'};
    gap: ${(props) => props.gap || '10px'};
    border: ${(props) => props.border || 'none'};
    box-shadow: ${(props) =>
        props.shadow || '0px 5px 26px 5px rgba(0, 0, 0, 0.17)'};
`;
