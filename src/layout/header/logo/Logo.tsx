import { memo } from 'react';
import styled from 'styled-components';
import { theme } from '../../../styles/Theme';

export const Logo = memo(() => {
    return <StyledLogo href="#main">Marina</StyledLogo>;
});

export const StyledLogo = styled.a`
    font-family: 'Imperial Script', cursive;
    color: ${theme.colors.primary};
    font-size: 2rem;

    &::first-letter {
        color: ${theme.colors.accent};
        text-shadow: 1px 1px 4px ${theme.colors.accent};
    }
`;
