import styled from "styled-components";
import { HiOutlineMail } from "react-icons/hi";

export const Footer = styled.footer`
    margin-bottom: 4rem;
    min-height: 70px;
    color: var(--nav-color);
    font-family: var(--font-mono);
    transition: var(--transition);
    text-align: center;
    a {
        text-decoration: none;
    }
`

export const SocialWrapper = styled.div`
    display: none;
    width: 100%;
    @media ${(props) => props.theme.breakpoints.sm} {
        display: block;
    }
`;

export const Socials = styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    li {
        list-style: none;
        transition: var(--transition);
        a {
            color: var(--nav-color);
            svg {
                width: 20px;
                height: 20px;
            }
            &:hover {
                color: var(--active-color);
            }
        }
        @media ${(props) => props.theme.breakpoints.sm} {
            margin-left: 2.1rem;
            margin-right: 2.1rem;
        } 
    }
`;

export const Copyright = styled.div`
    line-height: 70px;
    font-size: var(--fz-sm);
`

export const StyledHiOutlineMail = styled(HiOutlineMail)`
    font-size: var(--fz-xl);
    color: var(--active-color);
    cursor: pointer
`