import { memo } from 'react';
import styled from 'styled-components';
import { Logo } from '../../components/logo/Logo';
import { Menu } from '../../components/menu/Menu';
import { Button } from '../../components/UIKit/Button';
import { Container } from '../../components/UIKit/Container';
import { FlexWrapper } from '../../components/UIKit/FlexWrapper';

type HeaderPropsType = {};

export const Header = memo((props: HeaderPropsType) => {
    return (
        <HeaderBase>
            <Container>
                <FlexWrapper justify="space-between" align="center">
                    <Logo />
                    <Menu />
                    <Button variant="primary" as="a" href="#contacts">
                        Contact me
                    </Button>
                </FlexWrapper>
            </Container>
        </HeaderBase>
    );
});

const HeaderBase = styled.header`
    background-color: #222a36;
    position: fixed;
    height: 120px;
    width: 100%;
    padding: 20px;
    z-index: 10;
`;
