import { injectGlobal } from 'styled-components';
import theme from './theme';

const globalCss = injectGlobal`
    body,
    html,
    #root {
        height: 100%;
        font-size: 62.5%;
    }

    * {
        box-sizing: border-box;
        font-size: ${theme.typography.sm};
        padding: 0;
        margin: 0;
        font-family: BlinkMacSystemFont, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
    }

    h1 {
        font-size: ${theme.typography.xxxl};
    }

    h2 {
        font-size: ${theme.typography.xxl};
    }

    h3 {
        font-size: ${theme.typography.xl};
    }

    h4 {
        font-size: ${theme.typography.lg};
    }

    h5 {
        font-size: ${theme.typography.md};
    }

    p {
        font-size: ${theme.typography.md};
    }

    a {
        font-size: ${theme.typography.xxs};
        outline: none;
    }
`;
/*
    *:not(path):not(g) {
        color: hsla(210, 100%, 100%, 0.9) !important;
        background: hsla(210, 100%, 50%, 0.5) !important;
        outline: solid 0.25rem hsla(210, 100%, 100%, 0.5) !important;
        box-shadow: none !important;
    }
*/

export default globalCss;
