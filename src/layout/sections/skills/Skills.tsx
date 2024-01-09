import { memo } from 'react';
import { SKILLS as skills } from '../../../data/skills';
import { Skill } from '../../../components/skill/Skill';
import { FlexWrapper } from '../../../components/UIKit/FlexWrapper';
import { Section } from '../../../components/UIKit/Section';
import { SectionTitle } from '../../../components/UIKit/SectionTitle';
import { Container } from '../../../components/UIKit/Container';

export const Skills = memo(() => {
    return (
        <Section bg="#333e4e" id="skills">
            <Container>
                <FlexWrapper direction="column" align="center">
                    <SectionTitle underline>My Skills</SectionTitle>
                    <FlexWrapper
                        justify="space-between"
                        align="center"
                        gap="20px"
                    >
                        {skills.map((skill) => (
                            <Skill
                                key={skill.id}
                                id={skill.id}
                                description={skill.description}
                                title={skill.title}
                                viewBox={skill.viewBox || undefined}
                            />
                        ))}
                    </FlexWrapper>
                </FlexWrapper>
            </Container>
        </Section>
    );
});

/**
 * <Icon
                        sprite={skillsSprite}
                        id="html"
                        viewBox="0 0 100 100"
                    />

                    <Icon sprite={skillsSprite} id="css" viewBox="0 0 93 93" />
                    <Icon sprite={skillsSprite} id="sass" viewBox="0 0 30 30" />
                    <Icon sprite={skillsSprite} id="styledComponents" />
                    <Icon sprite={skillsSprite} id="react" />
                    <Icon sprite={skillsSprite} id="typescript" />
                    <Icon
                        sprite={skillsSprite}
                        id="redux"
                        viewBox="0 0 255 255"
                    />
                    <Icon sprite={skillsSprite} id="next" viewBox="0 0 15 15" />
 */
