import styled from "styled-components";

export const SocialFixedWrapper = styled.div`
    position: fixed;
    left: 40px;
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
                width: 15px;
                height: 15px;
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
    left: 47px;
    bottom: 0; 
    width: 1px;
    height: 150px;
    background-color: var(--main-color);
    @media ${(props) => props.theme.breakpoints.sm} {
        display: none;
    }
`