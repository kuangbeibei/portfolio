import { FC, useState, useEffect } from "react";
import Image from "next/image";
import { motion } from 'framer-motion';
import { AboutSection, IntroWrapper, StyledAboutIntro, ImageWrapper } from "./about.styled";
import { urlFor, client } from 'Client';
import { images as myImages } from "Constants";

const propcessInnerChildren = (arr: Array<any>) => {
    return arr.map((item: any) => {
        if (item.marks[0] === 'underline') {
            return <span key={item.text}>{
                item.text
            }</span>
        } else {
            return item.text;
        }
    })
}

const About: FC<{}> = () => {
    const [contents, setContents] = useState<Array<[]>>([])
    const [selfie, setSelfie] = useState<any>({})

    useEffect(() => {
        const query = '*[_type == "about"]';
        client.fetch(query).then((data) => {
            const [item] = data;
            if (item) {
                setContents(item.content);
                setSelfie(item.selfie);
            }
        });
    }, []);

    return <AboutSection>
        <h2>About Me</h2>
        <IntroWrapper>
            <StyledAboutIntro>
                {
                    contents.map((content: any, index: number) => {
                        const { children } = content;

                        if (children.length === 1) {
                            return <p key={index}>
                                {children[0].text}
                            </p>
                        } else {
                            return <p key={index}>
                                {propcessInnerChildren(children)}
                            </p>
                        }
                    })
                }

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