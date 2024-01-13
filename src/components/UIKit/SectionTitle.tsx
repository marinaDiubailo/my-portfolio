import styled from 'styled-components';
import { theme } from '../../styles/Theme';

export const SectionTitle = styled.h2`
    font-size: 2.2rem;
    font-family: 'Playfair Display', serif;
    font-weight: 700;
    text-align: center;
    position: relative;
    letter-spacing: 0.05em;
    position: relative;
    margin-bottom: 100px;

    &::after {
        content: '';
        width: 100px;
        height: 4px;
        position: absolute;
        background-color: ${theme.colors.accent};
        left: 50%;
        transform: translateX(-50%);
        bottom: -30px;
    }
`;
