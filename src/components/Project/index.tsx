import { FC } from 'react'
import { ProjectSection, ProjectContainer, ProjectItem, StyledVscFolder, StyledMdOpenInNew, StyledVscGithubAlt } from "./project.styled"


const Projects: FC<{}> = () => {
  return (
    <ProjectSection>
      <h2>{`Things I've built`}</h2>
      <ProjectContainer>
        <ProjectItem>
          <header>
            <StyledVscFolder />
            <div>
              <StyledVscGithubAlt />
              <StyledMdOpenInNew />
            </div>
          </header>
          <h3>i am title</h3>
          <p>Building a custom multisite compatible WordPress plugin to build global search with Algolia</p>
          <ul>
            <li>react</li>
            <li>typescript</li>
            <li>nextjs</li>
          </ul>
        </ProjectItem>
        <ProjectItem>
          <header>
            <StyledVscFolder />
            <div>
              <StyledVscGithubAlt />
              <StyledMdOpenInNew />
            </div>
          </header>
          <h3>i am title</h3>
          <p>Building a custom multisite compatible WordPress plugin to build global search with Algolia</p>
          <ul>
            <li>react</li>
            <li>typescript</li>
            <li>nextjs</li>
          </ul>
        </ProjectItem>
        <ProjectItem>
          <header>
            <StyledVscFolder />
            <div>
              <StyledVscGithubAlt />
              <StyledMdOpenInNew />
            </div>
          </header>
          <h3>i am title</h3>
          <p>Building a custom multisite compatible WordPress plugin to build global search with Algolia</p>
          <ul>
            <li>react</li>
            <li>typescript</li>
            <li>nextjs</li>
          </ul>
        </ProjectItem>
        <ProjectItem>
          <header>
            <StyledVscFolder />
            <div>
              <StyledVscGithubAlt />
              <StyledMdOpenInNew />
            </div>
          </header>
          <h3>i am title</h3>
          <p>Building a custom multisite compatible WordPress plugin to build global search with Algolia</p>
          <ul>
            <li>react</li>
            <li>typescript</li>
            <li>nextjs</li>
          </ul>
        </ProjectItem>
        <ProjectItem>
          <header>
            <StyledVscFolder />
            <div>
              <StyledVscGithubAlt />
              <StyledMdOpenInNew />
            </div>
          </header>
          <h3>i am title</h3>
          <p>Building a custom multisite compatible WordPress plugin to build global search with Algolia</p>
          <ul>
            <li>react</li>
            <li>typescript</li>
            <li>nextjs</li>
          </ul>
        </ProjectItem>
        <ProjectItem>
          <header>
            <StyledVscFolder />
            <div>
              <StyledVscGithubAlt />
              <StyledMdOpenInNew />
            </div>
          </header>
          <h3>i am title</h3>
          <p>Building a custom multisite compatible WordPress plugin to build global search with Algolia</p>
          <ul>
            <li>react</li>
            <li>typescript</li>
            <li>nextjs</li>
          </ul>
        </ProjectItem>
      </ProjectContainer>
    </ProjectSection>
  )
}

export default Projects;