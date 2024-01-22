import { memo, useState, useEffect } from 'react';
import { Logo } from './logo/Logo';
import { DesktopMenu } from './menu/DesktopMenu';
import { MobileMenu } from './menu/MobileMenu';
import { Container } from '../../components/UIKit/Container';
import { FlexWrapper } from '../../components/UIKit/FlexWrapper';
import { S } from './Header_Styles';

export const Header = memo(() => {
    const [width, setWidth] = useState(window.innerWidth);
    const breakpoint = 768;

    useEffect(() => {
        const handleWindowResize = () => setWidth(window.innerWidth);
        window.addEventListener('resize', handleWindowResize);
        return () => window.removeEventListener('resize', handleWindowResize);
    }, []);

    return (
        <S.Header>
            <Container>
                <FlexWrapper justify="space-between" align="center">
                    <Logo />
                    {width < breakpoint ? <MobileMenu /> : <DesktopMenu />}
                </FlexWrapper>
            </Container>
        </S.Header>
    );
});
