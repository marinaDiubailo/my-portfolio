import { memo } from 'react';
import styled from 'styled-components';
import { Icon } from '../UIKit/Icon';
import skillsSprite from '../../assets/icons/skillsSprite.svg';
import { FlexWrapper } from '../UIKit/FlexWrapper';
import { theme } from '../../styles/Theme';

export type SkillPropsType = {
    id: string;
    title: string;
    viewBox?: string;
};

export const Skill = memo((props: SkillPropsType) => {
    const { id, title, viewBox = '0 0 50 50' } = props;
    return (
        <li>
            <SkillWrapper
                width="130px"
                justify="space-between"
                align="center"
                direction="column"
                wrap="wrap"
            >
                <Icon sprite={skillsSprite} id={id} viewBox={viewBox} />
                <SkillTitle>{title}</SkillTitle>
            </SkillWrapper>
        </li>
    );
});
const SkillWrapper = styled(FlexWrapper)`
    min-height: 130px;
    padding: 5px;
    background-color: ${theme.bg.bgSecondary};
    transition: all 0.2s ease 0s;

    &:hover {
        transform: scale(1.15);
    }
`;

const SkillTitle = styled.h4`
    color: ${theme.colors.secondary};
    font-size: 16px;
    text-align: center;
`;
