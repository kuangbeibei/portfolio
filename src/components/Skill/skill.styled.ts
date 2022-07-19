import styled from "styled-components";
import { GiTriangleTarget } from "react-icons/gi";

export const SkillSection = styled.section`
    margin: 10rem 3rem 0;

    padding-top: 10rem;

    @media ${(props) => props.theme.breakpoints.md} {
      padding-top: 6rem;
    }

    h2 {
        margin-bottom: 4rem;
        display: flex;
        align-items: center;
        white-space: nowrap;
        line-height: 1.2;
        font-size: var(--fz-xxxl);
        font-weight: bold;
        width: max-content;
        background: linear-gradient(121.57deg, var(--nav-color) 10%,rgba(255,255,255,0.66) 40.15%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        &:after {
            content: '';
            position: relative;
            display: block;
            margin-left: 20px;
            width: 40rem;
            height: 1px;
            background: var(--light-color);
            @media ${(props) => props.theme.breakpoints.md} {
                width: 26rem;
            }
            @media ${(props) => props.theme.breakpoints.xs} {
                width: 20rem;
            }
            @media ${(props) => props.theme.breakpoints.xxs} {
                width: 10rem;
            }
            @media ${(props) => props.theme.breakpoints.xxxs} {
                width: 10%;
            }
        }
    }
`

export const SelectedSkillsWrap = styled.div`
    /* 用grid */
    display: grid;
    place-items: start;
    grid-template-columns: 25% 25% 25% 25%;
    gap: 4rem;
    color: var(--main-color);
    font-family: var(--font-mono);
    font-size: var(--fz-md);
    
    @media ${(props) => props.theme.breakpoints.lg} {
        grid-template-columns: 50% 50%; 
        gap: 4rem;
    }

    @media ${(props) => props.theme.breakpoints.md} {
        font-size: var(--fz-sm);
    }

    @media ${(props) => props.theme.breakpoints.sm} {
        font-size: var(--fz-xs);
    }
`

export const StyledSkillItem = styled.span`
    display: flex;
    justify-content: flex-start;
    align-items: center;
`

export const StyledGiTriangleTarget = styled(GiTriangleTarget)`
    margin-right: 1rem;
    transform: rotateZ(90deg);
    color: var(--active-color);
    font-size: var(--fz-sm);

    @media ${(props) => props.theme.breakpoints.md} {
        font-size: var(--fz-sm);
    }

    @media ${(props) => props.theme.breakpoints.sm} {
        font-size: var(--fz-xs);
    }
`