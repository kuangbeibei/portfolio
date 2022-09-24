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
			<h2>{lang === 'EN' ? 'About Me' : '关于我'}</h2>
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
							<p>Hello!👋 I'm Dana Kuang, my interest in web development back in 2014 when I was an international news editor at Netease, a nasdaq listed company based in China. Back then, I worked with web designers to make featured news pages - turns out teaching me a lot about HTML &amp; CSS and changed my career.</p>
							<p>To this day, I've had<span> 7 years' experience</span> as a frontend developer building <span>to B and to C projects</span> both on <span>desktop and mobile</span> for a variety of users. The main focus on my recent job was building accessible, inclusive admin dashboards for internal employees using React, Redux, Typescript, Node.js, etc.</p>
							<p>Currently, I am learning and building things about <span>blockchain & web3</span>, trying to integrate my previous knowledge into new things. With my passion, I want to give myself a break to dive into this new area embracing uncertainty and possibility.</p>
						</> : <>
							<p style={{lineHeight: 1.6}}>
							你好!👋 2014年我在网易做国际新闻编辑的时候第一次接触「网页设计师」这个角色，当时我的工作除了日常翻译外媒，便是和设计师就新闻专题的界面进行沟通，包括主题色、呈现形式、交互、背景图等，回头看这段经历成了我职业生涯的转折点。</p>
							<p style={{lineHeight: 1.6}}>如今，我从事前端开发7年，做过<span>to B和to C</span>项目，包括<span>桌面端和移动端</span>。近两年主要用<span>React + Typescript</span>开发企业内部系统，在这之前的技术栈是<span>Vue</span>全家桶系列，再往前是jQuery和Vanilla JavaScript。</p>
							<p style={{lineHeight: 1.6}}>目前我是离职状态，一边在学习<span>blockchain & web3</span>新技术和巩固旧知识，一边在锻炼身体。对所有机会保持敞开态度，欢迎联系沟通~</p>
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
