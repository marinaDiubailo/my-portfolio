import { memo } from 'react';
import { Fade } from 'react-awesome-reveal';
import { SKILLS as skills } from '../../../data/skills';
import { SectionTitle } from '../../../components/UIKit/SectionTitle';
import { Container } from '../../../components/UIKit/Container';
import { SkillCategory } from './skill/SkillCategory';

export const Skills = memo(() => {
    return (
        <section id="skills">
            <Container>
                <SectionTitle>My Skills</SectionTitle>
                <Fade cascade damping={0.2}>
                    <SkillCategory
                        category={'programming languages'}
                        skills={skills['programming languages']}
                    />
                    <SkillCategory
                        category={'libraries & frameworks'}
                        skills={skills['libraries & frameworks']}
                    />
                    <SkillCategory
                        category={'tools & platforms'}
                        skills={skills['tools & platforms']}
                    />
                </Fade>
            </Container>
        </section>
    );
});
