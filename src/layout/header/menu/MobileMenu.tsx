import { memo, useState } from 'react';
import { LinkType } from '../../../data/links';
import { Menu } from './Menu';
import { S } from './Menu_Styles';

export const MobileMenu = memo(({ links }: { links: LinkType[] }) => {
    const [popupIsOpen, setPopupIsOpen] = useState(false);
    const [burgerIsOpen, setBurgerIsOpen] = useState(false);

    const togglePopupIsOpen = () => {
        setPopupIsOpen((prev) => !prev);
        setBurgerIsOpen((prev) => !prev);
    };

    return (
        <nav>
            <S.BurgerButton isOpen={burgerIsOpen} onClick={togglePopupIsOpen}>
                <span></span>
            </S.BurgerButton>
            <S.MobileMenuPopup isOpen={popupIsOpen}>
                <Menu links={links} onClick={togglePopupIsOpen} />
            </S.MobileMenuPopup>
        </nav>
    );
});
