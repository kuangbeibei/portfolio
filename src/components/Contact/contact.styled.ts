import styled, { keyframes } from "styled-components";
import { AiOutlineLoading } from "react-icons/ai";

export const ContactSection = styled.section`

    margin: 10rem 2rem 14rem;

    padding-top: 10rem;

    @media ${(props) => props.theme.breakpoints.md} {
      padding-top: 6rem;
    }

    h2 {
        margin: 0 auto;
        display: flex;
        align-items: center;
        line-height: 1.2;
        font-size: var(--fz-xxxl);
        font-weight: bold;
        width: max-content;
        background: linear-gradient(121.57deg, var(--nav-color) 30%,rgba(255,255,255,0.66) 70.15%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    p {
        margin: 4rem auto;
        color: var(--main-color);
        font-size: var(--fz-lg);
        text-align: center;
    }

    button {
        margin-top: 3rem;
        display: block;
        border: 1px solid var(--active-color);
        border-radius: var(--border-radius);
        padding: 1rem 2rem;
        max-width: 200px;
        color: var(--active-color);
        font-size: var(--fz-sm);
        text-align: center;
        line-height: 1.2;
        background: transparent;
        outline: none;
        transition: var(--transition);
        cursor: pointer;
        &:hover {
            box-shadow: 0px 0px 3px 0px var(--active-color);
            background: rgba(66, 135, 245, .1)
        }

        @media ${(props) => props.theme.breakpoints.sm} {
            margin: 3rem auto 0;
        }
    }

    .message_submitted {
        line-height: 1.5;
        text-align: center;
        color: var(--active-color);
        font-size: var(--fz-lg);
        font-family: var(--font-mono);
    }
`

export const MessagerInfo = styled.div`
    display: grid;
    grid-template-areas: "name name email email" "textarea  textarea textarea textarea";
    gap: 2rem;
    .name {
        grid-area: name;
    }
    .email {
        grid-area: email;
    }
    .textarea {
        grid-area: textarea;
    }

    input, textarea {
        padding: 1.5rem 4rem 1.5rem 1.5rem;
        width: 100%;
        outline: none;
        
        background-color: var(--background);
        border: 1px solid var(--active-color);
        border-radius: var(--border-radius);
        color: var(--nav-color);
        font-size: var(--fz-md);
        ::placeholder {
            color: var(--main-color);
        }
        &:-webkit-autofill,
        &:-webkit-autofill:hover,
        &:-webkit-autofill:focus,
        &:-webkit-autofill:active  {
            -webkit-box-shadow: 0 0 0px 1000px var(--background) inset;
            -webkit-text-fill-color: var(--nav-color) !important;
        }
    }


    textarea {
        min-height: 10rem;
    }

    .field_errormsg {
        margin-top: 6px;
        margin-left: 2px;
        color: var(--pink);
        font-size: var(--fz-xs);
        font-weight: 300;
    }

    @media ${(props) => props.theme.breakpoints.md} {
        grid-template-areas: "name" "email" "textarea"; 
        input, textarea {
            padding: 1rem 3rem 1rem 1.5rem;
            font-size: var(--fz-sm);
        }
    } 
`

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;


export const AiOutlineLoadingStyled = styled(AiOutlineLoading)`
    animation: ${rotate} 1s linear infinite;
`