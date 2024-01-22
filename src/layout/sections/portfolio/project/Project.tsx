import { memo } from 'react';
import { Button } from '../../../../components/UIKit/Button';
import { Link } from '../../../../components/UIKit/Link';
import { SubTitle } from '../../../../components/UIKit/SubTitle';
import { S } from './Project_Styles';

type ProjectPropsType = {
    title: string;
    src: string;
    description: string;
};

export const Project = memo((props: ProjectPropsType) => {
    const { title, src, description } = props;

    return (
        <S.ProjectContainer>
            <S.ImageWrapper>
                <S.Image src={src} alt={title} />
                <Button variant="primary">view project</Button>
            </S.ImageWrapper>
            <S.ProjectDescription>
                <SubTitle transform="capitalize">{title}</SubTitle>
                <p>{description}</p>
                <Link href="#">demo</Link>
                <Link href="#" active>
                    code
                </Link>
            </S.ProjectDescription>
        </S.ProjectContainer>
    );
});
