import { memo } from 'react';
import { Fade } from 'react-awesome-reveal';
import { CategoryType } from '../../../../data/skills';
import { FlexWrapper } from '../../../../components/UIKit/FlexWrapper';
import { SubTitle } from '../../../../components/UIKit/SubTitle';
import { Skill, SkillPropsType } from './Skill';
import { S } from './Skill_Styles';

type SkillCategoryPropsType = {
    category: CategoryType;
    skills: SkillPropsType[];
};

export const SkillCategory = memo((props: SkillCategoryPropsType) => {
    const { category, skills } = props;
    return (
        <S.SkillCategoryWrapper
            direction="column"
            gap="20px"
            justify="center"
            align="center"
        >
            <SubTitle transform="capitalize">{category}</SubTitle>
            <FlexWrapper as="ul" justify="center" gap="30px" wrap="wrap">
                <Fade cascade damping={0.2}>
                    {skills.map((skill) => (
                        <Skill
                            key={skill.id}
                            id={skill.id}
                            title={skill.title}
                            viewBox={skill.viewBox || undefined}
                        />
                    ))}
                </Fade>
            </FlexWrapper>
        </S.SkillCategoryWrapper>
    );
});
