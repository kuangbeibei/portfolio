import styled from "styled-components";

export const AboutSection = styled.section`
   margin: 14rem 3rem 0;

   @media ${(props) => props.theme.breakpoints.sm} {
      margin: 2rem 0 0;
   }

   @media ${(props) => props.theme.breakpoints.md} {
      margin: 10rem auto 0;
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
      background: linear-gradient(121.57deg, var(--nav-color) 30%,rgba(255,255,255,0.66) 70.15%);
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
            width: 34rem;
         }
         @media ${(props) => props.theme.breakpoints.xs} {
            width: 32rem;
         }
         @media ${(props) => props.theme.breakpoints.xxs} {
            width: 22rem;
         }
         @media ${(props) => props.theme.breakpoints.xxxs} {
            width: 10%;
         }
      }
   }
`;

export const IntroWrapper = styled.div`
   display: flex;
   justify-content: space-around;
   align-content: center;
   align-items: center;
   
   @media ${(props) => props.theme.breakpoints.lg} {
      flex-direction: column;
   }
`;


export const StyledAboutIntro = styled.div`
   max-width: 580px;
   p {
      margin: 0 0 2rem;
      line-height: 1.4;
      color: var(--main-color);
      font-family: var(--font-sans);
      font-size: var(--fz-lg);
      span {
         color: var(--active-color);
      }
      @media ${(props) => props.theme.breakpoints.sm} {
         font-size: var(--fz-sm);
      }
   }
`

export const ImageWrapper = styled.div`
   width: 25rem;
   @media ${(props) => props.theme.breakpoints.lg} {
      width: 20rem;
   }
`