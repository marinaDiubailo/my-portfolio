import { memo } from 'react';
import styled from 'styled-components';
import { Logo } from '../../components/logo/Logo';
import { Menu } from '../../components/menu/Menu';
import { Button } from '../../components/UIKit/Button';

type HeaderPropsType = {};

export const Header = memo((props: HeaderPropsType) => {
    return (
        <HeaderBase>
            <Logo />
            <Menu />
            <Button variant="primary">Contact me</Button>
        </HeaderBase>
    );
});

const HeaderBase = styled.header`
    width: 1196px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 65px;
`;
