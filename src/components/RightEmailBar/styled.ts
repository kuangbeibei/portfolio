import styled from "styled-components";

export const EmailFixedWrapper = styled.div`
    position: fixed;
    right: 2rem;
    bottom: 120px;
    transform: translateY(-50%);
    writing-mode: vertical-lr;
    text-orientation: mixed;
    transition: var(--transition);
    color: var(--main-color);
    &:hover {
        transform: translateY(-55%);
        color: var(--active-color);
    }
    @media ${(props) => props.theme.breakpoints.sm} {
        display: none;
    }
`
interface ALinkInterface {
    letterSpacing?: boolean
}

export const Alink = styled.a<ALinkInterface>`
    position: relative;
    text-decoration: none;
    font-size: var(--fz-sm);
    letter-spacing: ${props => props.letterSpacing ? '3px' : '1px'};
    color: inherit;
`
interface VerticalLineInterface {
    chHeight: boolean
}

export const VerticalLine = styled.div<VerticalLineInterface>`
    position: fixed;
    right: 2.5rem;
    bottom: 0; 
    width: 1px;
    height: ${props => props.chHeight ? '150px' : '160px'};
    background-color: var(--main-color);
    @media ${(props) => props.theme.breakpoints.sm} {
        display: none;
    }
`