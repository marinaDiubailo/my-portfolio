import { memo } from 'react';
import { Menu } from './Menu';
import { S } from './Menu_Styles';

export const DesktopMenu = memo(() => {
    return (
        <S.Navigation>
            <Menu />
        </S.Navigation>
    );
});
