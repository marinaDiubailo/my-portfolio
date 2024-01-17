import { memo } from 'react';
import { LinkType } from '../../../data/links';
import { Menu } from './Menu';
import { S } from './Menu_Styles';

export const DesktopMenu = memo(({ links }: { links: LinkType[] }) => {
    return (
        <S.Navigation>
            <Menu links={links} />
        </S.Navigation>
    );
});
