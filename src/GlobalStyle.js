import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
    }
    *, ::after, ::before {
        box-sizing: inherit;
    }
    body {
        font-family: 'Poppins', sans-serif;
        background: ${({ theme }) => theme.colors.whisper};
        color: ${({ theme }) => theme.colors.black};
        justify-content: center;
    }
`;
