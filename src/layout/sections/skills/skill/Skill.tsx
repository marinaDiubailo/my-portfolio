import { memo } from 'react';
import { Icon } from '../../../../components/UIKit/Icon';
import skillsSprite from '../../../../assets/icons/skillsSprite.svg';
import { S } from './Skill_Styles';

export type SkillPropsType = {
    id: string;
    title: string;
    viewBox?: string;
};

export const Skill = memo((props: SkillPropsType) => {
    const { id, title, viewBox = '0 0 50 50' } = props;
    return (
        <li>
            <S.SkillWrapper
                width="130px"
                justify="space-between"
                align="center"
                direction="column"
                wrap="wrap"
            >
                <Icon sprite={skillsSprite} id={id} viewBox={viewBox} />
                <S.SkillTitle>{title}</S.SkillTitle>
            </S.SkillWrapper>
        </li>
    );
});
