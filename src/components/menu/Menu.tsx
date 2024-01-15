import { memo } from 'react';
import styled from 'styled-components';
import { theme } from '../../styles/Theme';
import { NAVIGATION_LINKS as links } from '../../data/links';
import { Link } from '../UIKit/Link';

export const Menu = memo(() => {
    return (
        <Navigation>
            <ul role="menu">
                {links.map((link) => (
                    <li key={link.id} role="menuitem">
                        <Link href={link.href}>
                            {link.name}
                            <Mask>
                                <span>{link.name}</span>
                            </Mask>
                            <Mask>
                                <span>{link.name}</span>
                            </Mask>
                        </Link>
                    </li>
                ))}
            </ul>
        </Navigation>
    );
});

const Mask = styled.span`
    position: absolute;
    top: 0;
    left: 0;
    display: inline-block;
    height: 50%;
    overflow-y: hidden;
    color: ${theme.colors.primary};

    & + & {
        top: 50%;
        span {
            display: inline-block;
            transform: translateY(-50%);
        }
    }
`;

const Navigation = styled.nav`
    ul {
        display: flex;
        padding: 10px;
        gap: 40px;

        li {
            position: relative;

            a {
                color: transparent;
            }

            &:before {
                content: '';
                display: inline-block;
                height: 3px;
                background-color: ${theme.colors.primary};
                position: absolute;
                top: 50%;
                left: -10px;
                right: -10px;
                z-index: 1;
                transform: scale(0);
            }

            &:hover {
                &::before {
                    transform: scale(1);
                }

                ${Mask} {
                    color: ${theme.colors.accent};
                    transform: skewX(12deg) translatex(4px);

                    & + ${Mask} {
                        transform: skewX(12deg) translatex(-4px);
                    }
                }
            }
        }
    }

    @media ${theme.media.tablet} {
        display: none;
    }
`;
