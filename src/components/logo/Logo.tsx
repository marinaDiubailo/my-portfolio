import { memo } from 'react';
// import styled from 'styled-components';
import { Icon } from '../uiKit/icon/Icon';
import skillsSprite from '../../assets/icons/skillsSprite.svg';

type LogoPropsType = {};

export const Logo = memo((props: LogoPropsType) => {
    return (
        <a href="_blank">
            <Icon id={'code'} sprite={skillsSprite} />
        </a>
    );
});
