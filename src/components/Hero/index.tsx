import { FC } from 'react';
import { HeroSection, ResumeButton, SelfIntro, Hi } from './hero.styled';
import BackgroundAnimation from "./BackgroundAnimation"

const Hero: FC<{}> = () => {
    return (
        <HeroSection>
            <BackgroundAnimation />
            <h1>{`Hi, my name is`}</h1>
            <h2>{`Kuangbeibei.`}</h2>
            <h3>{`I build things for the web.`}</h3>
            <SelfIntro>{`I'm a web developer specializing in building exceptional digital experiences. Recently, I become a freelancer and looking for remote opportunities, so feel free to say `}<Hi href="mailto:332518418@qq.com">Hi</Hi>.</SelfIntro>
            <ResumeButton>Check out my resume</ResumeButton>
        </HeroSection>
    )
}

export default Hero;