import { memo } from 'react';
import { NAVIGATION_LINKS as links } from '../../../data/links';
import { S } from './Menu_Styles';

type MenuPropsType = {
    onClick?: () => void;
};

export const Menu = memo(({ onClick }: MenuPropsType) => {
    return (
        <ul role="menu">
            {links.map((link) => (
                <S.MenuItem key={link} role="menuitem">
                    <S.NavLink
                        to={link.toLowerCase()}
                        activeClass="active"
                        smooth
                        spy
                        onClick={onClick}
                    >
                        {link}
                        <S.Mask>
                            <span>{link}</span>
                        </S.Mask>
                        <S.Mask>
                            <span>{link}</span>
                        </S.Mask>
                    </S.NavLink>
                </S.MenuItem>
            ))}
        </ul>
    );
});
