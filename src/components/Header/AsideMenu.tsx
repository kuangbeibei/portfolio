import { FC } from 'react'
import Link from "next/link"
import { RiMenuLine, RiCloseLine } from "react-icons/ri"
import { AsideWrapper, AsideMenu as StyledAsideMenu, Links, StyledLink, MobileIcon } from "./header.styled"
import { navs } from 'Constants'
import { MenuContextInterface, useMenuContext } from 'context'


const AsideMenu: FC<{}> = () => {
    console.log('aside menu');

    const { open, handleMenuSwitch } = useMenuContext() as MenuContextInterface;

    return (
        <AsideWrapper>
            <MobileIcon>
                {!open && <RiMenuLine onClick={handleMenuSwitch} onTouchEnd={handleMenuSwitch} />}
                {open && <RiCloseLine onClick={handleMenuSwitch} onTouchEnd={handleMenuSwitch} />}
            </MobileIcon>

            <StyledAsideMenu isOpen={open as any as boolean}>
                <Links column>
                    {
                        navs.map(nav => <Link href={nav.link} key={nav.link}>
                            <StyledLink>{nav.title}</StyledLink>
                        </Link>)
                    }
                </Links>
            </StyledAsideMenu>

        </AsideWrapper>
    )
}

export default AsideMenu;
