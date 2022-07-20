import { FC, useState } from "react";
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
import { navs } from "Constants";
import { MenuContextInterface, useMenuContext } from "context";

const AsideMenu: FC<{
	anchor: string;
}> = ({ anchor }) => {
	const { open, handleMenuSwitch } = useMenuContext() as MenuContextInterface;
	const [activeLang, setActiveLang] = useState('CH')

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
									}].map(item => <LanguageSpan active={activeLang === item.tag} key={item.tag} onClick={() => setActiveLang(item.tag)}>{item.lang}</LanguageSpan>)
								}
							</button>
						</ToggleLangulageWrap>
				</Links>
			</StyledAsideMenu>
		</AsideWrapper>
	);
};

export default AsideMenu;
