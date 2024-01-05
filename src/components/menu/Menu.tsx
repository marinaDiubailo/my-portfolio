import { memo } from 'react';
import styled from 'styled-components';
import { NAVIGATION_LINKS as links } from '../../data/links';
import { Link } from '../UIKit/Link';

export const Menu = memo(() => {
    return (
        <Navigation>
            <ul>
                {links.map((link) => (
                    <li key={link.id}>
                        <Link href={link.href}>{link.name}</Link>
                    </li>
                ))}
            </ul>
        </Navigation>
    );
});

const Navigation = styled.nav`
    ul {
        display: flex;
        padding: 10px;
        gap: 40px;
    }
`;
