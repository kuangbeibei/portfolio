import { FC, useState, useEffect } from "react";
import Link from "next/link";
import { RiMenuLine, RiCloseLine } from "react-icons/ri";
import {
	AsideWrapper,
	AsideMenu as StyledAsideMenu,
	Links,
	StyledLink,
	MobileIcon,
	ToggleLangulageWrap,
	LanguageSpan,
} from "./header.styled";
import { navsWithLang, NavLinkInterface } from "Constants";
import { MenuContextInterface, useLangContext, useMenuContext } from "context";

const AsideMenu: FC<{
	anchor: string;
}> = ({ anchor }) => {
	const { open, handleMenuSwitch } = useMenuContext() as MenuContextInterface;
	const {lang,setLang} = useLangContext();
	const [navs, setNavs] = useState<Array<NavLinkInterface>>([])

	useEffect(() => {
		setNavs(navsWithLang[lang])
	}, [lang])

	const handleSideMenuAnchor = () => {
        handleMenuSwitch()
	};

	return (
		<AsideWrapper>
			<MobileIcon>
				{!open && (
					<RiMenuLine
						onClick={handleMenuSwitch}
						onTouchEnd={handleMenuSwitch}
					/>
				)}
				{open && (
					<RiCloseLine
						onClick={handleMenuSwitch}
						onTouchEnd={handleMenuSwitch}
					/>
				)}
			</MobileIcon>

			<StyledAsideMenu isOpen={open as any as boolean}>
				<Links column>
					{navs.map((nav) => (
						<Link href={nav.link} key={nav.link}>
							<StyledLink active={anchor === nav.link} onClick={handleSideMenuAnchor}>{nav.title}</StyledLink>
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
									}].map(item => <LanguageSpan active={lang === item.tag} key={item.tag} onClick={() => {
										setLang(item.tag as 'CH' | 'EN')
										handleMenuSwitch()
									}}>{item.lang}</LanguageSpan>)
								}
							</button>
						</ToggleLangulageWrap>
				</Links>
			</StyledAsideMenu>
		</AsideWrapper>
	);
};

export default AsideMenu;
