import styled from "styled-components";
import { GiTriangleTarget } from "react-icons/gi";

export const SkillSection = styled.section`
    margin: 20rem 3rem 0;

    @media ${(props) => props.theme.breakpoints.sm} {
        margin: 16rem 0 0;
    }

    h2 {
        display: flex;
        align-items: center;
        white-space: nowrap;
        line-height: 1.2;
        font-size: var(--fz-xxxl);
        font-weight: bold;
        width: max-content;
        background: linear-gradient(121.57deg, var(--lightest-slate) 30%,rgba(255,255,255,0.66) 70.15%);
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
            @media ${(props) => props.theme.breakpoints.sm} {
                width: 100%;
            }
        }
    }
`

export const SelectedSkillsWrap = styled.div`
    margin: 4rem 0 0;
    /* 用grid */
    display: grid;
    place-items: start;
    grid-template-columns: auto auto auto auto;
    gap: 4rem;
    color: var(--main-color);
    font-family: var(--font-mono);
    font-size: var(--fz-md);
    @media ${(props) => props.theme.breakpoints.lg} {
        grid-template-columns: auto auto; 
        gap: 4rem;
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
`