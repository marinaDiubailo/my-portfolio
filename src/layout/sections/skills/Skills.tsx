import { memo } from 'react';
// import { theme } from '../../../styles/Theme';
import { SKILLS as skills } from '../../../data/skills';
import { Skill } from '../../../components/skill/Skill';
import { FlexWrapper } from '../../../components/UIKit/FlexWrapper';
import { SectionTitle } from '../../../components/UIKit/SectionTitle';
import { Container } from '../../../components/UIKit/Container';

export const Skills = memo(() => {
    return (
        <section id="skills">
            <Container>
                <SectionTitle>My Skills</SectionTitle>
                <FlexWrapper justify="space-between" gap="20px" wrap="wrap">
                    {skills.map((skill) => (
                        <Skill
                            key={skill.id}
                            id={skill.id}
                            title={skill.title}
                            viewBox={skill.viewBox || undefined}
                        />
                    ))}
                </FlexWrapper>
            </Container>
        </section>
    );
});
