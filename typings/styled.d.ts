import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        breakpoints: {
            xxxs: string
            xxs: string
            xs: string
            sm: string
            md: string
            lg: string
            xl: string
        }
    }
}