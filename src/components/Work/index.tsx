import { FC, useState, useEffect } from 'react'
import Image from 'next/image'
import { StyledWorkSection, WorkInfoContainer, YearOfWork, JobDescription, WorkProduct, YearButton, YearActiveBar, StyledGiTriangleTarget } from "./work.styled"
import { images } from 'Constants'
import { jobs, JobInterface, Years, JobYear } from 'Constants'

const WorkExperience: FC<{}> = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [job, setJob] = useState<JobInterface>({
    year: '',
    company: '',
    jobTitle: '',
    jobDescription: '',
    produceImage: '',
  });

  useEffect(() => {
    setJob(jobs[activeIndex])
  }, [activeIndex]);

  const handleYearChange = (index: number) => {
    setActiveIndex(index);
  }

  return (
    <StyledWorkSection>
      <h2>Work Experience</h2>

      <WorkInfoContainer>
        <YearOfWork>
          {
            Years.map((year: JobYear, index: number) => <YearButton className={index === activeIndex ? 'active' : ''} key={year} onClick={() => handleYearChange(index)}>{year}</YearButton>)
          }
          <YearActiveBar index={activeIndex} />
        </YearOfWork>

        <JobDescription>
          <h3>{job.jobTitle}</h3>
          <p>{job.company}</p>
          <ul>
            {
              job.jobDescription.split(';').map((desc, index) => (
                <li key={index}><StyledGiTriangleTarget /><span>{desc}</span></li>
              ))
            }
          </ul>

        </JobDescription>

        <WorkProduct>
          <div className="picture-wrapper">
            <div className="img-wrapper">
              <picture>
                <img src={images.workdemo.src} width="100%" height="100%" />
              </picture>
            </div>
          </div>
        </WorkProduct>

      </WorkInfoContainer>
      {/* <WorkContainer>

         <YearOfWorkWrapper>

            <YearButton className='active'>10/2018 - 03/2022</YearButton>
            <YearButton>06/2016 - 09/2018</YearButton>
            <YearButton>09/2015 - 06/2018</YearButton>
            <YearButton>before 09/2015</YearButton>
            <YearActiveBar index={0} />
            
          </YearOfWorkWrapper>

        <JobDescription>
          <h3>Scout title</h3>
          <p>Collaborated with a small team of student designers to spearhead a new brand and design system for Scout’s inaugural student-led design conference at Northeastern</p>
          <ul>
            <li><StyledGiTriangleTarget /><span>Worked closely with designers and management team to develop, document, and manage the conference’s marketing website using Jekyll, Sass, and JavaScript</span></li>
            <li><StyledGiTriangleTarget /><span>Collaborated with a small team of student designers to spearhead a new brand and design system for Scout’s inaugural student-led design conference at Northeastern</span></li>
            <li><StyledGiTriangleTarget /><span>Collaborated with a small team of student designers to spearhead a new brand and design system for Scout’s inaugural student-led design conference at Northeastern</span></li>
          </ul>
        </JobDescription>

        <WorkProduct>
          <Image src={images.workdemo.src} width='160px' height="300px" />
        </WorkProduct> 

      </WorkContainer>*/}

    </StyledWorkSection>
  )
}

export default WorkExperience;
