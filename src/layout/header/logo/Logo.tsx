import { memo, useCallback } from 'react';
import styled from 'styled-components';
import { animateScroll } from 'react-scroll';
import { theme } from '../../../styles/Theme';

export const Logo = memo(() => {
    const scrollToTopHandler = useCallback(() => {
        animateScroll.scrollToTop({ duration: 500, smooth: true });
    }, []);

    return <StyledLogo onClick={scrollToTopHandler}>Marina</StyledLogo>;
});

export const StyledLogo = styled.a`
    font-family: 'Imperial Script', cursive;
    color: ${theme.colors.primary};
    font-size: 2rem;
    cursor: pointer;

    &::first-letter {
        color: ${theme.colors.accent};
        text-shadow: 1px 1px 4px ${theme.colors.accent};
    }
`;
