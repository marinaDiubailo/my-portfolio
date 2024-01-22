import { memo, useState } from 'react';
import { Menu } from './Menu';
import { S } from './Menu_Styles';

export const MobileMenu = memo(() => {
    const [popupIsOpen, setPopupIsOpen] = useState(false);

    const togglePopupIsOpen = () => {
        setPopupIsOpen((prev) => !prev);
    };

    return (
        <nav>
            <S.BurgerButton isOpen={popupIsOpen} onClick={togglePopupIsOpen}>
                <span></span>
            </S.BurgerButton>
            <S.MobileMenuPopup
                isOpen={popupIsOpen}
                onClick={() => setPopupIsOpen(false)}
            >
                <Menu onClick={togglePopupIsOpen} />
            </S.MobileMenuPopup>
        </nav>
    );
});
