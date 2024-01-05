import { memo } from 'react';
import styled from 'styled-components';
import { Icon } from '../UIKit/Icon';
import skillsSprite from '../../assets/icons/skillsSprite.svg';
import { Card } from '../UIKit/Card';
import { Description } from '../UIKit/Description';

export type SkillPropsType = {
    id: string;
    title: string;
    description: string;
    viewBox?: string;
};

export const Skill = memo((props: SkillPropsType) => {
    const { id, title, viewBox = '0 0 50 50', description } = props;
    return (
        <Card>
            <Icon sprite={skillsSprite} id={id} viewBox={viewBox} />
            <SubTitle>{title}</SubTitle>
            <Description>{description}</Description>
        </Card>
    );
});

const SubTitle = styled.h3``;
