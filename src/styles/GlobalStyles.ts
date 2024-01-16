import { createGlobalStyle } from 'styled-components';
import { font } from './Common';
import { theme } from './Theme';

export const GlobalStyles = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        border: 0;
    }

    *,
    *::before,
    *::after {
        box-sizing: border-box;
    }

    a,
    a:visited {
        text-decoration: none;
    }

    a:hover {
        text-decoration: none;
    }

    button {
        cursor: pointer;
        font: inherit;
        background-color: unset;
        border: none;
    }

    button::-moz-focus-inner {
        padding: 0;
        border: 0;
    }

    img {
        vertical-align: top;
    }

    ul {
        list-style: none;
    }

    section {
        padding: 100px 0;
        display: flex;

        @media ${theme.media.tablet} {
            padding: 80px 0;
        }

        &:nth-child(3n+1){
            background-color: ${theme.bg.bgPrimary}
        }

        &:nth-child(3n+2){
            background-color: ${theme.bg.bgAccent}
        }

        &:nth-child(3n+3){
            background-color: ${theme.bg.bgSecondary}
        }
    }

    p {
        ${font({
            color: theme.colors.secondary,
            lineHeight: 1.5,
            Fmin: 14,
            Fmax: 20,
        })}

        margin: 15px 0;

    }

    h1,
    h2,
    h3,
    h4 {
        font-size: 1rem;
        font-weight: 400;
    }

    html,
    body {
        margin: 0;
        font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        height: 100vh;
        width: 100%;
        min-width: 360px;
        color: ${theme.colors.primary};
        font-size: 20px;
        line-height: 1.2;
        background: ${theme.bg.bgPrimary};
    }
`;
