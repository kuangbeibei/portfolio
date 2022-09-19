import { FC } from "react";
import { useRouter } from "next/router";
import { HeroSection, ResumeButton, SelfIntro, Hi } from "./hero.styled";
import BackgroundAnimation from "./BackgroundAnimation";
import { useLangContext } from "context";
import { FiMail } from "react-icons/fi";
import resume from "Assets/resume.pdf";

const Hero: FC<{}> = () => {
	const router = useRouter();
	const { lang } = useLangContext();
	return (
		<HeroSection>
			<BackgroundAnimation />
			{lang === "EN" ? (
				<>
					<h1>{`Hi, my name is`}</h1>
					<h2>{`Dana Kuang.`}</h2>
					<h3>{`I build things for the web.`}</h3>
					<SelfIntro>
						{`I'm a web developer specializing in building exceptional digital experiences. Recently, I become a freelancer and looking for new opportunities, so feel free to say `}
						<Hi href="mailto:332518418@qq.com">Hi</Hi>.
					</SelfIntro>
					<ResumeButton onClick={() => router.push("/resume")}>
						Check out my resume
					</ResumeButton>
				</>
			) : (
				<>
					<h1>{`Hi, my name is`}</h1>
					<h2>{`况聃`}</h2>
					<h3>{`I build things for the web.`}</h3>
					<SelfIntro lineHeight="1.6">
						{`在我看来，程序世界里所有问题都可以被解决。相较于魔幻的现实生活充斥着诸多不合逻辑的故事，编程世界则皆有逻辑可寻，因而也可以找到相应的解决方法。这是我喜欢coding的原因之一。欢迎您给我发邮件 `}
						<Hi href="mailto:332518418@qq.com">进一步交流~ </Hi>
					</SelfIntro>
					<a href={resume}>
						<ResumeButton>查看我的简历</ResumeButton>
					</a>
				</>
			)}
		</HeroSection>
	);
};

export default Hero;
