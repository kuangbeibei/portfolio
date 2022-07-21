import styled from "styled-components";

export const SocialFixedWrapper = styled.div`
    position: fixed;
    left: 2rem;
    bottom: 80px;
    transform: translateY(-50%);
    transition: all .2s ease-in-out;
    color: var(--main-color);
    &:hover {
        color: var(--active-color);
    }
    @media ${(props) => props.theme.breakpoints.sm} {
        display: none;
    }
`

export const Socials = styled.ul`
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    list-style: none;
    li {
        margin-bottom: 10px;
        transition: var(--transition);
        a {
            color: var(--main-color);
            svg {
                width: 16px;
                height: 16px;
            }
            &:hover {
                color: var(--active-color);
            }
        }
        &:hover {
            transform: scale(1.2);
        }
    }
`;

export const VerticalLine = styled.div`
    position: fixed;
    left: 2.6rem;
    bottom: 0; 
    width: 1px;
    height: 135px;
    background-color: var(--main-color);
    @media ${(props) => props.theme.breakpoints.sm} {
        display: none;
    }
`