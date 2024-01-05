import { memo } from 'react';
import styled from 'styled-components';
import { Card } from '../UIKit/Card';
import { Description } from '../UIKit/Description';
import { FlexWrapper } from '../UIKit/FlexWrapper';
import { Link } from '../UIKit/Link';

type WorkPropsType = {
    title: string;
    src: string;
    alt: string;
    description: string;
};

export const Work = memo((props: WorkPropsType) => {
    const { title, src, alt, description } = props;

    return (
        <Card width="540px">
            <Preview src={src} alt={alt} />
            <Title>{title}</Title>
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

const Preview = styled.img`
    width: 100%;
    height: 260px;
    object-fit: cover;
`;
const Title = styled.h3``;
