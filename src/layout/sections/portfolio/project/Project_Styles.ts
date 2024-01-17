import styled from 'styled-components';
import { theme } from '../../../../styles/Theme';
import { Button } from '../../../../components/UIKit/Button';
import { Link } from '../../../../components/UIKit/Link';
import { SubTitle } from '../../../../components/UIKit/SubTitle';

const ProjectContainer = styled.div`
    width: 330px;
    flex-grow: 1;
    background-color: ${theme.bg.bgPrimary};
    box-shadow: 1px 1px 25px rgba(0, 0, 0, 0.1);

    ${Link} + ${Link} {
        margin-left: 20px;
    }

    @media ${theme.media.desktop} {
        max-width: 540px;
    }
`;

const ImageWrapper = styled.div`
    position: relative;
    transition: all 0.3s ease 0s;

    ${Button} {
        opacity: 0;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    &::before {
        content: '';
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.15);
        backdrop-filter: blur(4px);
        opacity: 0;
    }

    &:hover {
        &::before,
        ${Button} {
            opacity: 1;
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
