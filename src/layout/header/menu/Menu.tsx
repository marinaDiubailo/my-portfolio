import { memo } from 'react';
import { LinkType } from '../../../data/links';
import { Link } from '../../../components/UIKit/Link';
import { S } from './Menu_Styles';

type MenuPropsType = {
    links: LinkType[];
    onClick?: () => void;
};

export const Menu = memo(({ links, onClick }: MenuPropsType) => {
    return (
        <ul role="menu">
            {links.map((link) => (
                <S.MenuItem key={link.id} role="menuitem">
                    <Link href={link.href} onClick={onClick}>
                        {link.name}
                        <S.Mask>
                            <span>{link.name}</span>
                        </S.Mask>
                        <S.Mask>
                            <span>{link.name}</span>
                        </S.Mask>
                    </Link>
                </S.MenuItem>
            ))}
        </ul>
    );
});
