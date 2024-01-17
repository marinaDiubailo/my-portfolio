import styled from 'styled-components';
import { theme } from '../../../styles/Theme';
import { font } from '../../../styles/Common';

const StyledSection = styled.section`
    min-height: 100vh;
`;

const Greeting = styled.span`
    ${font({
        family: "'Playfair Display', serif",
        weight: 700,
        Fmin: 26,
        Fmax: 36,
    })}
`;

const Name = styled.h2`
    ${font({
        family: "'Playfair Display', serif",
        weight: 700,
        Fmin: 30,
        Fmax: 60,
    })}

    span {
        white-space: nowrap;
        position: relative;
        z-index: 0;

        &:before {
            content: '';
            width: 100%;
            display: inline-block;
            height: 20px;
            background-color: ${theme.colors.accent};
            position: absolute;
            bottom: 0;
            z-index: -1;
            opacity: 0.8;
        }
    }
`;

const MainTitle = styled.h1`
    ${font({
        Fmin: 16,
        Fmax: 20,
    })}
    display: inline-block;
`;

const Introduction = styled.div`
    margin: 10px 0 30px;

    @media ${theme.media.mobile} {
        margin: 15px 0 30px;
    }
`;

const Photo = styled.img`
    width: 350px;
    height: 430px;
    object-fit: cover;
    margin-right: 20px;

    @media ${theme.media.mobile} {
        width: 310px;
        height: 380px;
    }
`;

const PhotoWrapper = styled.div`
    position: relative;
    z-index: 0;

    &::after {
        content: '';
        position: absolute;
        width: 360px;
        height: 470px;
        left: 20px;
        top: -20px;
        border: 7px solid ${theme.colors.accent};
        z-index: -1;

        @media ${theme.media.mobile} {
            width: 315px;
            height: 415px;
            left: 15px;
            top: -15px;
        }
    }
`;

export const S = {
    StyledSection,
    Greeting,
    Name,
    MainTitle,
    Introduction,
    Photo,
    PhotoWrapper,
};
