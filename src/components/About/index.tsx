import { FC, useState, useEffect } from "react";
import Image from "next/image";
import { motion } from 'framer-motion';
import { AboutSection, IntroWrapper, StyledAboutIntro, ImageWrapper } from "./about.styled";
import { urlFor, client } from 'Client';
import { AboutInterface } from "./about";
import { images as myImages } from "Constants";


const About: FC<{}> = () => {
    const [abouts, setAbouts] = useState<Array<AboutInterface>>([]);

    useEffect(() => {
        const query = '*[_type == "abouts"]';
        client.fetch(query).then((data) => {
            setAbouts(data);
        });
    }, []);

    return <AboutSection>
        <h2>About Me</h2>
        <IntroWrapper>
            <StyledAboutIntro>
                <p>{`Hello!👋 I'm Kuangbeibei, my interest in web development started back in 2014 when I was an international news editor at Netease, a nasdaq listed company based in China. Back then, I worked with web designers to make featured news pages - turns out teaching me a lot about HTML & CSS and changed my career.`}</p>

                <p>To this day, {`I've had`} <span>{`7 years' experiences`}</span> as a web developer building <span>{"to B"} and {"to C"}</span> projects both on <span>desktop and mobile</span> for a variety of users. The main focus on my last job was building an accessible, inclusive admin dashboard for internal employees using <span>React, Redux, Typescript</span>, etc.</p>

                <p>Currently, I am self learning about <span>web3</span>, trying to integrate my previous knowledge into new things and making a difference. I alongside with my passion want to give myself a break to dive into this new area embracing uncertainty and possibility.</p>

            </StyledAboutIntro>
            <ImageWrapper>
                <Image src={myImages.selfie} alt="Picture of the author" layout="intrinsic" />
            </ImageWrapper>

        </IntroWrapper>
        {/* {abouts.map((about, index) => (
            <motion.div
                whileInView={{ opacity: 1 }}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.5, type: 'tween' }}
                className="app__profile-item"
                key={about.title + index}
            >
                <img src={urlFor(about.selfie) as any as string} alt={about.title} />
                <h2 className="bold-text" style={{ marginTop: 20 }}>{about.title}</h2>
                <p className="p-text" style={{ marginTop: 10 }}>{about.introduction}</p>
            </motion.div>
        ))} */}
    </AboutSection>
};

export default About;