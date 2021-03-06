import { FC, useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
	AboutSection,
	IntroWrapper,
	StyledAboutIntro,
	ImageWrapper,
} from "./about.styled";
import { urlFor, client } from "Client";
import { images as myImages } from "Constants";
import { useLangContext } from "context";

const propcessInnerChildren = (arr: Array<any>) => {
	return arr.map((item: any) => {
		if (item.marks[0] === "underline") {
			return <span key={item.text}>{item.text}</span>;
		} else {
			return item.text;
		}
	});
};

const About: FC<{}> = () => {
	// const [contents, setContents] = useState<Array<[]>>([]);
	// const [selfie, setSelfie] = useState<any>({});

	// useEffect(() => {
	// 	const query = '*[_type == "about"]';
	// 	client.fetch(query).then((data) => {
	// 		const [item] = data;
	// 		if (item) {
	// 			setContents(item.content);
	// 			setSelfie(item.selfie);
	// 		}
	// 	});
	// }, []);

	const {lang} = useLangContext();
	return (
		<AboutSection id="about">
			<h2>{lang === 'EN' ? 'About Me' : 'ε³δΊζ'}</h2>
			<IntroWrapper>
				<StyledAboutIntro>
					{/* {contents.map((content: any, index: number) => {
						const { children } = content;

						if (children.length === 1) {
							return <p key={index}>{children[0].text}</p>;
						} else {
							return <p key={index}>{propcessInnerChildren(children)}</p>;
						}
					})} */}
					{
						lang === 'EN' ? <>
							<p>Hello!π I'm Dana Kuang, my interest in web development started back in 2014 when I was an international news editor at Netease, a nasdaq listed company based in China. Back then, I worked with web designers to make featured news pages - turns out teaching me a lot about HTML &amp; CSS and changed my career.</p>
							<p>To this day, I've had<span> 7 years' experience</span> as a web developer building <span>to B and to C projects</span> both on <span>desktop and mobile</span> for a variety of users. The main focus on my recent job was building accessible, inclusive admin dashboards for internal employees using React, Redux, Typescript, etc.</p>
							<p>Currently, I am learning and building things about <span>blockchain & web3</span>, trying to integrate my previous knowledge into new things. With my passion, I want to give myself a break to dive into this new area embracing uncertainty and possibility.</p>
						</> : <>
							<p style={{lineHeight: 1.6}}>
							δ½ ε₯½!π 2014εΉ΄ζε¨η½ζεε½ιζ°ι»ηΌθΎηζΆεη¬¬δΈζ¬‘ζ₯θ§¦γη½ι‘΅θ?Ύθ?‘εΈγθΏδΈͺθ§θ²οΌε½ζΆζηε·₯δ½ι€δΊζ₯εΈΈηΏ»θ―ε€εͺοΌδΎΏζ―εθ?Ύθ?‘εΈε°±ζ°ι»δΈι’ηηι’θΏθ‘ζ²ιοΌεζ¬δΈ»ι’θ²γεη°ε½’εΌγδΊ€δΊγθζ―εΎη­οΌεε€΄ηθΏζ?΅η»εζδΊζθδΈηζΆ―ηθ½¬ζηΉγ</p>
							<p style={{lineHeight: 1.6}}>ε¦δ»οΌζδ»δΊεη«―εΌε7εΉ΄οΌεθΏ<span>to Bεto C</span>ι‘Ήη?οΌεζ¬<span>ζ‘ι’η«―εη§»ε¨η«―</span>γθΏδΈ€εΉ΄δΈ»θ¦η¨<span>React + Typescript</span>εΌεδΌδΈει¨η³»η»οΌε¨θΏδΉεηζζ―ζ ζ―<span>Vue</span>ε¨ε?Άζ‘Άη³»εοΌεεΎεζ―jQueryεVanilla JavaScriptγ</p>
							<p style={{lineHeight: 1.6}}>η?εζζ―η¦»θηΆζοΌδΈθΎΉε¨ε­¦δΉ <span>blockchain & web3</span>ζ°ζζ―εε·©εΊζ§η₯θ―οΌδΈθΎΉε¨ι»ηΌθΊ«δ½γε―ΉζζζΊδΌδΏζζεΌζεΊ¦οΌζ¬’θΏθη³»ζ²ι~</p>
						</>
					}
					
				</StyledAboutIntro>
				<ImageWrapper>
					<Image
						src={myImages.selfie}
						alt="Picture of the author"
						layout="intrinsic"
					/>
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
	);
};

export default About;
