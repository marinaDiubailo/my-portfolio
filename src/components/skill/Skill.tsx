import { memo } from 'react';
import styled from 'styled-components';
import { Icon } from '../UIKit/Icon';
import skillsSprite from '../../assets/icons/skillsSprite.svg';
import { FlexWrapper } from '../UIKit/FlexWrapper';
import { SubTitle } from '../UIKit/SubTitle';
import { theme } from '../../styles/Theme';
// import { theme } from '../../styles/Theme';
// import { Card } from '../UIKit/Card';
// import { FlexWrapper } from '../UIKit/FlexWrapper';
// import { Description } from '../UIKit/Description';

export type SkillPropsType = {
    id: string;
    title?: string;
    description?: string;
    viewBox?: string;
};

export const Skill = memo((props: SkillPropsType) => {
    const { id, title, viewBox = '0 0 50 50' } = props;
    return (
        <FlexWrapper
            width="200px"
            justify="center"
            align="center"
            direction="column"
            gap="40px"
        >
            <IconWrapper>
                <Icon sprite={skillsSprite} id={id} viewBox={viewBox} />
            </IconWrapper>
            <SubTitle transform="uppercase">{title}</SubTitle>
        </FlexWrapper>
    );
});

const IconWrapper = styled.div`
    position: relative;
    z-index: 0;

    &::before {
        content: '';
        position: absolute;
        display: inline-block;
        width: 120px;
        height: 120px;
        background-color: ${theme.colors.primary};
        opacity: 0.6;
        filter: blur(60px);
        transform: rotate(45deg) translate(-50%, -50%);
        left: 50%;
        top: 50%;
        transform-origin: top left;
        z-index: -1;
    }
`;
