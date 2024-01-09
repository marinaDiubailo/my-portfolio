import { memo } from 'react';
import styled from 'styled-components';
import { Button } from '../UIKit/Button';
import { Card } from '../UIKit/Card';
import { Description } from '../UIKit/Description';
import { FlexWrapper } from '../UIKit/FlexWrapper';
import { Link } from '../UIKit/Link';

type WorkPropsType = {
    title: string;
    src: string;
    description: string;
};

export const Work = memo((props: WorkPropsType) => {
    const { title, src, description } = props;

    return (
        <Card width="540px">
            <ProjectView src={src} justify="center" align="center">
                <ProjectContainer justify="center" align="center">
                    <ProjectButton variant="primary">
                        VIEW PROJECT
                    </ProjectButton>
                </ProjectContainer>
            </ProjectView>
            <h3>{title}</h3>
            <Description>{description}</Description>
            <FlexWrapper gap="20px">
                <Link href="#" upper>
                    demo
                </Link>
                <Link href="#" upper>
                    code
                </Link>
            </FlexWrapper>
        </Card>
    );
});

const ProjectContainer = styled(FlexWrapper)`
    height: 100%;
    transition: all 0.3s ease 0s;
`;

const ProjectButton = styled(Button)`
    display: none;
`;

type ProjectViewPropsType = {
    src: string;
};
const ProjectView = styled(FlexWrapper)<ProjectViewPropsType>`
    height: 280px;
    border-radius: 10px;
    margin-bottom: 10px;
    background-image: url(${(props) => props.src});
    background-size: cover;

    &:hover {
        & button {
            display: block;
        }
        & div {
            backdrop-filter: blur(5px);
        }
    }
`;
