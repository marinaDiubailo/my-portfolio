import styled from 'styled-components';
import { font } from '../../styles/Common';
import { theme } from '../../styles/Theme';

export const SectionTitle = styled.h2`
    ${font({
        family: "'Playfair Display', serif",
        weight: 700,
        Fmin: 36,
        Fmax: 44,
    })}
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

    @media ${theme.media.mobile} {
        margin-bottom: 60px;

        &::after {
            bottom: -25px;
        }
    }
`;
