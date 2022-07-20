import styled from "styled-components";

interface HeaderInterface {
    isShown: boolean;
    isShowShadow: boolean;
}

export const Header = styled.header<HeaderInterface>`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	z-index: 11;
	padding: 0 25px;
	height: var(--header-scroll-height);
	background: var(--header);
	backdrop-filter: blur(4px);
	transition: var(--transition);
	transform: ${(props) =>
        props.isShown
            ? "translateY(0px)"
            : "translateY(calc(var(--header-scroll-height) * -1))"};
	box-shadow: ${(props) =>
        props.isShowShadow ? "0 10px 30px -10px var(--box-shadow)" : ""};
`;

export const Navbar = styled.nav`
	position: relative;
	margin: 0 auto;
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: 100%;
	max-width: 1400px;
`;

export const Logo = styled.div`
	svg {
		width: 30px;
		height: 30px;
	}
`;

export const LinksWrap = styled.div`
	display: block;
	@media ${(props) => props.theme.breakpoints.sm} {
		display: none;
	}
`;

interface LinksInterface {
    readonly column?: boolean;
}

export const Links = styled.ul<LinksInterface>`
	display: flex;
	justify-content: start;
	align-items: center;
	flex-direction: ${(props) => (props.column ? "column" : "row")};
`;

interface StyledLinkInterface {
    active: boolean;
}

export const StyledLink = styled.a<StyledLinkInterface>`
	padding: 2rem;
	transition: var(--transition);
	font-size: var(--fz-sm);
	font-family: var(--font-mono);
	font-weight: 500;
	color: ${(props) =>
        props.active ? "var(--active-color)" : "var(--nav-color)"};
	&:hover {
		color: var(--active-color);
		cursor: pointer;
	}

	@media ${(props) => props.theme.breakpoints.sm} {
		margin-top: 1.2rem;
		margin-bottom: 1.2rem;
		padding: 2rem;
	}
`;

export const MobileIcon = styled.div`
	display: none;
	@media ${(props) => props.theme.breakpoints.sm} {
		position: relative;
		z-index: 10;
		display: block;
		svg {
			font-size: 30px;
			color: var(--nav-color);
			transition: var(--transition);
			&:hover {
				cursor: pointer;
				color: var(--active-color);
			}
		}
	}
`;

interface AsideMenuInterface {
    isOpen: boolean;
}

export const AsideWrapper = styled.div`
	display: none;
	@media ${(props) => props.theme.breakpoints.sm} {
		display: block;
	}
`;

export const AsideMenu = styled.aside<AsideMenuInterface>`
	@media ${(props) => props.theme.breakpoints.sm} {
		position: fixed;
		top: 0;
		right: 0;
		z-index: 9;
		padding: 10rem 2rem 5rem;
		height: 100vh;
		width: min(75vw, 400px);
		transform: ${(props) =>
        props.isOpen ? "translateX(0px)" : "translateX(100vw)"};
		transition: var(--transition);
		background: var(--light-navy);
		color: #fff;
		font-size: 40px;
	}
`;
export const ToggleLangulageWrap = styled.div`
	button {
		display: flex;
		justify-content: space-around;
        align-items: center;
		outline: none;
		border: 1px solid var(--active-color);
		border-radius: var(--border-radius);
		font-family: var(--font-mono);
        font-size: var(--fz-xs);
		font-weight: 500;
		transition: all 0.05s linear;
	}

    @media ${(props) => props.theme.breakpoints.sm} {
		margin-top: 20px;
        font-size: var(--fz-sm);
	}
`;

interface LanguageActive {
    active?: boolean;
}

export const LanguageSpan = styled.span<LanguageActive>`
	height: 100%;
	padding: 2px 4px;
	color: ${props => props.active ? '#fff' : 'var(--active-color)'};
    background-color: ${props => props.active ? 'rgba(255, 255, 255, .3)' : 'transparent)'};
    cursor: pointer;
	&:first-child {
		border-right: ${props => props.active ? '1px solid var(--lightest-slate)' : '0 none'};
	}
    &:last-child {
        border-left: ${props => props.active ? '1px solid var(--lightest-slate)' : '0 none'}; 
    }
`;
