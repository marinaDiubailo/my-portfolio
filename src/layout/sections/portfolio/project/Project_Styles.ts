import styled from 'styled-components';
import { theme } from '../../../../styles/Theme';
import { Button } from '../../../../components/UIKit/Button';
import { Link } from '../../../../components/UIKit/Link';
import { SubTitle } from '../../../../components/UIKit/SubTitle';

const ProjectContainer = styled.div`
    max-width: 95%;
    margin: 20px;
    background-color: ${theme.bg.bgPrimary};
    border-radius: 15px;
    overflow: hidden;
    //box-shadow: 1px 1px 10px 5px rgba(255, 255, 255, 0.2);
    box-shadow: 0px 5px 20px rgba(255, 255, 255, 0.15);
`;

const ImageWrapper = styled.div`
    position: relative;
    //padding: 20px;

    ${Button} {
        opacity: 0;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -40%);
        transition: ${theme.animations.transition};
    }

    &::before {
        content: '';
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.15);
        backdrop-filter: blur(2px);
        opacity: 0;
        transition: ${theme.animations.transition};
    }

    &:hover {
        &::before {
            opacity: 1;
        }

        ${Button} {
            opacity: 1;
            transform: translate(-50%, -50%);
        }
    }

    @media ${theme.media.tablet} {
        &::before,
        ${Button} {
            opacity: 1;
        }
    }
`;

const Image = styled.img`
    width: 100%;
    height: 280px;
    object-fit: cover;
`;

const ProjectDescription = styled.div`
    padding: 25px 20px;

    ${Link} + ${Link} {
        margin-left: 20px;
    }

    ${SubTitle} {
        text-align: start;
    }
`;

export const S = {
    ProjectContainer,
    ImageWrapper,
    Image,
    ProjectDescription,
};
