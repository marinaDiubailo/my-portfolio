import { memo } from 'react';
import styled from 'styled-components';
import { theme } from '../../styles/Theme';
import { Button } from '../UIKit/Button';
import { Link } from '../UIKit/Link';
import { SubTitle } from '../UIKit/SubTitle';

type ProjectPropsType = {
    title: string;
    src: string;
    description: string;
};

export const Project = memo((props: ProjectPropsType) => {
    const { title, src, description } = props;

    return (
        <ProjectContainer>
            <ImageWrapper>
                <Image src={src} alt={title} />
                <Button variant="primary">VIEW PROJECT</Button>
            </ImageWrapper>
            <ProjectDescription>
                <SubTitle transform="capitalize">{title}</SubTitle>
                <p>{description}</p>
                <Link href="#" upperCase normal>
                    demo
                </Link>
                <Link href="#" upperCase normal>
                    code
                </Link>
            </ProjectDescription>
        </ProjectContainer>
    );
});

const ProjectContainer = styled.div`
    max-width: 540px;
    background-color: ${theme.bg.bgPrimary};
    box-shadow: 1px 1px 25px rgba(0, 0, 0, 0.1);
    border-radius: 10px;

    ${Link} + ${Link} {
        margin-left: 20px;
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

    &:hover {
        ${Button} {
            opacity: 1;
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
