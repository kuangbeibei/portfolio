import { DefaultTheme } from "styled-components";

const theme: DefaultTheme = {
    // Breakpoints for responsive design
    breakpoints: {
        xs: 'screen and (max-width: 300px)',
        sm: 'screen and (max-width: 640px)',
        md: 'screen and (max-width: 768px)',
        lg: 'screen and (max-width: 1024px)',
        xl: 'screen and (max-width: 1280px)'
    },
}

export default theme;