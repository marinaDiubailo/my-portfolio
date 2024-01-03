import { memo } from 'react';
import styled from 'styled-components';
import { Logo } from '../../components/logo/Logo';
import { Menu } from '../../components/menu/Menu';

type HeaderPropsType = {};

export const Header = memo((props: HeaderPropsType) => {
    return (
        <HeaderBase>
            <Logo />
            <Menu />
        </HeaderBase>
    );
});

const HeaderBase = styled.header`
    background-color: yellow;
    display: flex;
    justify-content: space-between;
`;
