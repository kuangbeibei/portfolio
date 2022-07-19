import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

const GlobalStyle = createGlobalStyle`
    ${normalize};

    :root {
        --background: #0a192f;
        --header: rgba(10, 25, 47, 0.85);
        --header-scroll-height: 80px;
        --box-shadow: rgba(2,12,27,0.7);

        --light-navy: #112240;
        
        --nav-color: #ccd6f6;
        --active-color: #9e98f5;
        --main-color: rgba(204, 214, 246, .6);
        --light-color: #233554; 

        --transition: all 0.25s cubic-bezier(0.645,0.045,0.355,1);
        --gradient: linear-gradient(270deg, #13ADC7 0%, #945DD6 100%);

        
        --font-base: "Space Grotesk,sans-serif";
        --font-sans: "Calibre","Inter","San Francisco","SF Pro Text","-apple-system,system-ui,sans-serif";
        --font-mono: "SF Mono","Fira Code","Fira Mono","Roboto Mono",monospace;

        --fz-xxs: 12px;
        --fz-xs: 13px;
        --fz-sm: 14px;
        --fz-md: 16px;
        --fz-lg: 18px;
        --fz-xl: 20px;
        --fz-xxl: 22px;
        --fz-xxxl: 28px;

        --dark-navy: #020c1b;
        --navy: #0a192f;
        
        --lightest-navy: #233554;
        
        --dark-slate: #495670;
        --slate: #8892b0;
        
        --lightest-slate: #ccd6f6;
        --white: #e6f1ff;
        --green: #64ffda;
        --green-tint: rgba(100,255,218,0.1);
        --pink: #f57dff;
        --blue: #57cbff;
        
        --fz-heading: 32px;
        --border-radius: 4px;
        --nav-height: 100px;
        --nav-scroll-height: 70px;
        --tab-height: 56px;
        --tab-width: 167px;
        --easing: cubic-bezier(0.645,0.045,0.355,1);
       
        --hamburger-width: 30px;
        --ham-before: top 0.1s ease-in 0.25s,opacity 0.1s ease-in;
        --ham-before-active: top 0.1s ease-out,opacity 0.1s ease-out 0.12s;
        --ham-after: bottom 0.1s ease-in 0.25s,transform 0.22s cubic-bezier(0.55,0.055,0.675,0.19);
        --ham-after-active: bottom 0.1s ease-out,transform 0.22s cubic-bezier(0.215,0.61,0.355,1) 0.12s;
    }
      
    * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
        scroll-behavior: smooth;
    }

    button {
        outline: none;
        border: 0 none;
        background-color: transparent;
    }

    html {
        font-size: 62.5%;
        -webkit-font-smoothing: antialiased;
    }    

    body {
        overflow-x: hidden;
        font-family: var(--font-base);
        background: var(--background);
    }

    .blur {
        overflow: hidden;
        #content > * {
            filter: blur(5px) brightness(0.7);
            transition: var(--transition);
            pointer-events: none;
            user-select: none;
        }
    }

    main {
        margin: 0 auto;
        min-height: 100vh;
        
        @media ${props => props.theme.breakpoints.xl} {
            padding: 0 150px; 
        }

        @media ${props => props.theme.breakpoints.lg} {
            padding: 0 100px;
        }

        @media ${props => props.theme.breakpoints.md} {
            padding: 0 50px;
        }

        @media ${props => props.theme.breakpoints.sm} {
            padding: 0 25px;
        }
    }
`;

export default GlobalStyle;
