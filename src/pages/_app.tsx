import { useState, useEffect } from "react";
import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import theme from "Theme/default";
import GlobalStyle from "Styles/globals";
import Layout from "layout";
import { MenuContext, LangContext } from "context";

export default function App({ Component, pageProps }: AppProps) {
	const [open, setOpen] = useState<boolean>(false);
	const handleMenuSwitch = () => {
		setOpen(!open);
	};
	const [lang, setLang] = useState<"CH" | "EN">("EN");

	useEffect(() => {
		if (open) {
			document.body.classList.add("blur");
		} else {
			document.body.classList.remove("blur");
		}
	}, [open]);

	return (
		<ThemeProvider theme={theme}>
			<LangContext.Provider
				value={{
					lang,
					setLang,
				}}
			>
				<MenuContext.Provider
					value={{
						open,
						handleMenuSwitch,
					}}
				>
					<GlobalStyle />
					<Layout>
						<Component {...pageProps} />
					</Layout>
				</MenuContext.Provider>
			</LangContext.Provider>
		</ThemeProvider>
	);
}
