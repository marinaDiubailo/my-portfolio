import { memo } from 'react';
import styled from 'styled-components';
import { Logo } from '../../components/logo/Logo';
import { Menu } from '../../components/menu/Menu';
import { MobileMenu } from '../../components/menu/MobileMenu';
import { Container } from '../../components/UIKit/Container';
import { FlexWrapper } from '../../components/UIKit/FlexWrapper';
import { theme } from '../../styles/Theme';

type HeaderPropsType = {};

export const Header = memo((props: HeaderPropsType) => {
    return (
        <StyledHeader>
            <Container>
                <FlexWrapper justify="space-between" align="center">
                    <Logo />
                    <Menu />
                    <MobileMenu />
                </FlexWrapper>
            </Container>
        </StyledHeader>
    );
});

const StyledHeader = styled.header`
    position: fixed;
    width: 100%;
    padding: 20px 0;
    z-index: 10;

    ${Container} {
        background-color: ${theme.bg.bgPrimary};
    }
`;
