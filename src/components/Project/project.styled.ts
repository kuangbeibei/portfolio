import styled from "styled-components";
import { MdOpenInNew } from "react-icons/md";
import { VscFolder, VscGithubAlt } from "react-icons/vsc"

export const ProjectSection = styled.section`

    margin: 20rem auto 0;

    @media ${(props) => props.theme.breakpoints.sm} {
        margin: 14rem 0 0;
    }

    h2 {
        margin: 0 auto 4rem;
        display: flex;
        align-items: center;
        white-space: nowrap;
        line-height: 1.2;
        font-size: var(--fz-xxxl);
        font-weight: bold;
        width: max-content;
        background: linear-gradient(121.57deg, var(--nav-color) 30%,rgba(255,255,255,0.66) 70.15%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        &:before {
            content: '';
            position: relative;
            display: block;
            margin-right: 20px;
            width: 20rem;
            height: 1px;
            background: var(--light-color);
            @media ${(props) => props.theme.breakpoints.md} {
                width: 15rem;
            }
            @media ${(props) => props.theme.breakpoints.xs} {
                width: 10rem; 
            }
            @media ${(props) => props.theme.breakpoints.xxs} {
                width: 5rem;
            }
            @media ${(props) => props.theme.breakpoints.xxxs} {
                width: 10%;
            }
        }
        &:after {
            content: '';
            position: relative;
            display: block;
            margin-left: 20px;
            width: 20rem;
            height: 1px;
            background: var(--light-color);
            @media ${(props) => props.theme.breakpoints.md} {
                width: 15rem;
            }
            @media ${(props) => props.theme.breakpoints.xs} {
                width: 10rem; 
            }
            @media ${(props) => props.theme.breakpoints.xxs} {
                width: 5rem;
            }
            @media ${(props) => props.theme.breakpoints.xxxs} {
                width: 10%;
            }
        }
    }
`

export const ProjectContainer = styled.div`
    display: grid;
    place-items: center;
    grid-template-columns: auto auto auto;
    gap: 2rem;
    @media ${(props) => props.theme.breakpoints.lg} {
        grid-template-columns: auto auto;
        gap: 2rem;
    }
    @media ${(props) => props.theme.breakpoints.xs} {
        grid-template-columns: auto;
        gap: 2rem;
    }
`

export const ProjectItem = styled.div`
    padding: 2rem 2.5rem;
    max-width: 30rem;
    min-height: 30rem;
    background: var(--light-navy);
    border-radius: var(--border-radius);
    box-shadow: var(--box-shadow);
    cursor: pointer;
    transition: var(--transition);
    &:hover {
        transform: translateY(-6px);
        border-radius: 0;
        h3 {
            background: linear-gradient(121.57deg, var(--active-color) 30%,rgba(255,255,255,0.66) 70.15%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }
    }

    header {
        margin-bottom: 2rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 6rem;
    }

    h3 {
        margin-bottom: 1rem;
        line-height: 2;
        color: var(--nav-color);
        font-size: var(--fz-xl);
    }

    p {
        color: var(--main-color);
        font-size: var(--fz-sm);
        line-height: 1.4;
    }

    ul {
        margin-top: 2rem;
        display: flex;
        justify-content: flex-start;
        align-content: center;
        align-items: center;
        list-style: none;
        flex-wrap: wrap;
        li {
            margin-right: 1rem;
            font-family: var(--font-mono);
            line-height: 1.5;
            color: var(--main-color);
            font-size: var(--fz-sm);
        }
    }
`

export const StyledVscFolder = styled(VscFolder)`
    color: var(--active-color);
    font-size: 4rem;
    font-weight: lighter;
`

export const StyledVscGithubAlt = styled(VscGithubAlt)`
    color: var(--lightest-slate);
    font-size: 2.5rem;
    transition: var(--transition);
    &:hover {
        color: var(--active-color)
    }
`

export const StyledMdOpenInNew = styled(MdOpenInNew)`
    margin-left: 1.6rem;
    color: var(--lightest-slate);
    font-size: 2.5rem;
    transition: var(--transition);
    &:hover {
        color: var(--active-color)
    }
`