import { FC, useState, useEffect } from "react";
// import { client } from 'Client'
import {
	ProjectSection,
	ProjectContainer,
	ProjectItem,
	StyledVscFolder,
	StyledMdOpenInNew,
	StyledVscGithubAlt,
} from "./project.styled";
import { ProjectInterface, projectWithLang } from "Constants";
import { useLangContext } from "context";
const Projects: FC<{}> = () => {
	const [projects, setProjects] = useState<Array<any>>([]);
	// useEffect(() => {
	//   const query = '*[_type=="projects"]';
	//   client.fetch(query).then(data => {
	//     setProjects(data)
	//   })
	// }, [])

	const { lang } = useLangContext();

	return (
		<ProjectSection id="project">
			<h2>{lang === 'EN' ? `Things I've built` : '个人项目'}</h2>
			<ProjectContainer>
				{projectWithLang[lang].map((project: ProjectInterface) => (
					<ProjectItem key={project.name}>
						<header>
							<StyledVscFolder />
							<div>
								<a href={project.github} target="_blank">
									<StyledVscGithubAlt />
								</a>
								{project.demo && <StyledMdOpenInNew />}
							</div>
						</header>
						<h3>{project.name}</h3>
						<p>{project.desc}</p>
						<ul>
							{project.technologies.map((tech: string, index: number) => (
								<li key={index}>
									{tech}
									{index !== project.technologies.length - 1 && ","}
								</li>
							))}
						</ul>
					</ProjectItem>
				))}
			</ProjectContainer>
		</ProjectSection>
	);
};

export default Projects;
