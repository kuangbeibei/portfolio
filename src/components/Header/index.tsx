import { FC, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import {
	Header as StyledHeader,
	Navbar,
	Logo,
	LinksWrap,
	Links,
	StyledLink,
	ToggleLangulageWrap,
	LanguageSpan
} from "./header.styled";
import { navs } from "Constants";
import AsideMenu from "./AsideMenu";
import { Logo as LogoComponent } from "Components";

const Header: FC<{}> = () => {
	const router = useRouter();

	let lastScrollTop = useRef<number>(0);

	const [isShown, setIsShown] = useState<boolean>(true);
	const [isShowShadow, setIsShowShadow] = useState<boolean>(false);
	const [anchor, setAnchor] = useState<string>("");
	const [activeLang, setActiveLang] = useState('CH')

	useEffect(() => {
		const handleScroll = () => {
			const currentScrollTop = document.documentElement.scrollTop;
			if (lastScrollTop.current > currentScrollTop) {
				// scroll up
				setIsShown(true);
				if (currentScrollTop > 0) {
					setIsShowShadow(true);
				} else {
					setIsShowShadow(false);
				}
			} else {
				// scroll down
				setIsShown(false);
			}
			lastScrollTop.current = currentScrollTop;
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	useEffect(() => {
		console.log("aspath", router.asPath);
		setAnchor(router.asPath.slice(1));
	}, [router.asPath]);

	return (
		<StyledHeader isShown={isShown} isShowShadow={isShowShadow}>
			<Navbar>
				<Logo>
					<a href="/">
						<LogoComponent />
					</a>
				</Logo>

				<LinksWrap>
					<Links>
						{navs.map((nav) => (
							<Link href={nav.link} key={nav.link}>
								<StyledLink active={nav.link === anchor}>
									{nav.title}
								</StyledLink>
							</Link>
						))}
						<ToggleLangulageWrap>
							<button>
								{
									[{
										lang: '中',
										tag: 'CH',
									}, {
										lang: 'EN',
										tag: 'EN'
									}].map(item => <LanguageSpan active={activeLang === item.tag} key={item.tag} onClick={() => setActiveLang(item.tag)}>{item.lang}</LanguageSpan>)
								}
							</button>
						</ToggleLangulageWrap>
					</Links>
				</LinksWrap>

				<AsideMenu anchor={anchor} />
			</Navbar>
		</StyledHeader>
	);
};

export default Header;
