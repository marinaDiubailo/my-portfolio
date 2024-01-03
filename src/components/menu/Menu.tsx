import { memo } from 'react';
import styled from 'styled-components';

type MenuPropsType = {};

export const Menu = memo((props: MenuPropsType) => {
    return (
        <MenuBase>
            <ul>
                <li>
                    <a href="">Home</a>
                </li>
                <li>
                    <a href="">Skills</a>
                </li>
                <li>
                    <a href="">Works</a>
                </li>

                <li>
                    <a href="">Contacts</a>
                </li>
            </ul>
        </MenuBase>
    );
});

const MenuBase = styled.nav`
    ul {
        display: flex;
        gap: 30px;
    }
`;
