import { memo } from 'react';
import styled from 'styled-components';
import { CategoryType } from '../../data/skills';
// import styled from 'styled-components';
import { FlexWrapper } from '../UIKit/FlexWrapper';
import { SubTitle } from '../UIKit/SubTitle';
import { Skill, SkillPropsType } from './Skill';

type SkillCategoryPropsType = {
    category: CategoryType;
    skills: SkillPropsType[];
};

export const SkillCategory = memo((props: SkillCategoryPropsType) => {
    const { category, skills } = props;
    return (
        <SkillCategoryWrapper
            direction="column"
            gap="20px"
            justify="center"
            align="center"
        >
            <SubTitle transform="capitalize">{category}</SubTitle>
            <FlexWrapper as="ul" justify="center" gap="30px" wrap="wrap">
                {skills.map((skill) => (
                    <Skill
                        key={skill.id}
                        id={skill.id}
                        title={skill.title}
                        viewBox={skill.viewBox || undefined}
                    />
                ))}
            </FlexWrapper>
        </SkillCategoryWrapper>
    );
});

const SkillCategoryWrapper = styled(FlexWrapper)`
    margin-bottom: 30px;
`;
