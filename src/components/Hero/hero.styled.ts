import styled from "styled-components";
import { images } from "Constants";

export const HeroSection = styled.section`
    margin-top: 2rem;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: 100vh;

    @media ${(props) => props.theme.breakpoints.sm} {
        margin-top: 2rem;
    }
  
    .bgAnimation__svg {
        position: absolute;
        top: 8rem;
        right: -5rem;
        width: 45rem;
        height: 45rem;
        @media ${(props) => props.theme.breakpoints.sm} {
            display: none;
        }
    }

    h1 {
        margin-bottom: 1.2rem;
        line-height: 1;
        font-family: var(--font-mono);
        font-weight: lighter;
        color: var(--active-color);
    }

    h2 {
        margin-bottom: 1rem;
        line-height: 1.2;
        font-size: clamp(40px, 8vw, 80px);
        font-weight: 500;
        width: max-content;
        background: linear-gradient(121.57deg, var(--nav-color) 10%,rgba(255,255,255,0.66) 90.15%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    h3 {
        margin-bottom: 2rem;
        line-height: 1;
        letter-spacing: -2px;
        font-size: clamp(40px, 8vw, 80px);
        color: var(--main-color);
    }
`;

export const Hi = styled.a`
    text-decoration: none;
    color: var(--active-color);
`;

export const ResumeButton = styled.button`
    margin-top: 6rem;
    border: 1px solid var(--active-color);
    border-radius: var(--border-radius);
    padding: 1.5rem 3rem;
    max-width: 260px;
    color: var(--active-color);
    font-size: var(--fz-sm);
    text-align: center;
    line-height: 1.5;
    background: transparent;
    outline: none;
    transition: var(--transition);
    cursor: pointer;
    &:hover {
        box-shadow: 0px 0px 3px 0px var(--active-color);
        background: rgba(66, 135, 245, .1)
    }
`

export const SelfIntro = styled.p`
    margin-top: 1.2rem;
    max-width: 560px;
    line-height: 1.4;
    color: var(--main-color);
    font-size: var(--fz-lg);
    @media ${(props) => props.theme.breakpoints.sm} {
        font-size: var(--fz-sm);
    }
`;