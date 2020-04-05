import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Montserrat:300,600');

    *, *::befote, *::after {
        box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    body {
        font-size: 1.6rem;
        margin: 0;
        padding: 0;
        font-family: "montserrat", sans-serif;
        background-color: #424242;
        color: #eeeeee;
    }

    html {
        font-size: 62,5%;

    }
`

export default GlobalStyle;