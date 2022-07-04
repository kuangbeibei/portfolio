import { DefaultTheme } from "styled-components";

const theme: DefaultTheme = {
    // Breakpoints for responsive design
    breakpoints: {
        xxxs: 'screen and (max-width: 400px)',
        xxs: 'screen and (max-width: 496px)',
        xs: 'screen and (max-width: 540px)',
        sm: 'screen and (max-width: 640px)',
        md: 'screen and (max-width: 768px)',
        lg: 'screen and (max-width: 1024px)',
        xl: 'screen and (max-width: 1280px)'
    },
}

export default theme;