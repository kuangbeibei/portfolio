import { FC, useState, useEffect } from "react";
// import { client } from "Client";
import {
	SkillSection,
	SelectedSkillsWrap,
	StyledSkillItem,
	StyledGiTriangleTarget,
} from "./skill.styled";
import { useLangContext } from "context";

const Skills: FC<{}> = () => {
	// const [skills, setSkills] = useState<Array<string>>([]);
	// useEffect(() => {
	// 	const query = '*[_type=="skills"]';
	// 	client.fetch(query).then((data) => {
	// 		const [item] = data;
	// 		console.log(item.name);
	// 	});
	// }, []);
	const { lang } = useLangContext();

	return (
		<SkillSection id="skill">
			<h2>{lang === "EN" ? "Skills recently used" : "近期常用技术"}</h2>
			<SelectedSkillsWrap>
				{["React", "TypeScript", "Next.js", "JavaScript", "Node.js", "Styled Components", "Webpack", "TailwindCSS", "Ant Design", "Git", "Sanity"].map((skill: string) => (
					<StyledSkillItem key={skill}>
						<StyledGiTriangleTarget />
						{skill}
					</StyledSkillItem>
				))}
			</SelectedSkillsWrap>
		</SkillSection>
	);
};

export default Skills;
