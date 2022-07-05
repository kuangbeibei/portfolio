import { FC, useState, useEffect } from 'react'
import { client } from 'Client'
import { ProjectSection, ProjectContainer, ProjectItem, StyledVscFolder, StyledMdOpenInNew, StyledVscGithubAlt } from "./project.styled"


const Projects: FC<{}> = () => {
  const [projects, setProjects] = useState<Array<any>>([])
  useEffect(() => {
    const query = '*[_type=="projects"]';
    client.fetch(query).then(data => {
      setProjects(data)
    })
  }, [])

  return (
    <ProjectSection>
      <h2>{`Things I've built`}</h2>
      <ProjectContainer>
        {
          projects.map((project: any) => (
            <ProjectItem key={project.name}>
              <header>
                <StyledVscFolder />
                <div>
                  <StyledVscGithubAlt />
                  <StyledMdOpenInNew />
                </div>
              </header>
              <h3>{project.name}</h3>
              <p>{project.desc}</p>
              <ul>
                {
                  project.technologies.map((tech: string, index: number) => <li key={index}>{tech}</li>)
                }
              </ul>
            </ProjectItem>
          ))
        }
      </ProjectContainer>
    </ProjectSection>
  )
}

export default Projects;