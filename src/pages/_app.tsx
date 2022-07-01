import { useState, useEffect } from "react"
import type { AppProps } from "next/app"
import { ThemeProvider } from "styled-components"
import theme from "Theme/default"
import GlobalStyle from "Styles/globals"
import Layout from "layout"
import { Header } from "Components"
import { MenuContext } from "context"

export default function App({ Component, pageProps }: AppProps) {
	console.log('App~~~', pageProps);

	const [open, setOpen] = useState<boolean>(false);
	const handleMenuSwitch = () => {
        setOpen(!open);
    }

	useEffect(() => {
		if (open) {
			document.body.classList.add('blur')
		} else {
			document.body.classList.remove('blur')
		}
	}, [open])

	return (
		<ThemeProvider theme={theme}>
			<MenuContext.Provider value={{
				open,
				handleMenuSwitch
			}}>
				<GlobalStyle />
				<Header />
				<Layout>
					<Component {...pageProps} />
				</Layout>
			</MenuContext.Provider>
		</ThemeProvider>
	);
}
