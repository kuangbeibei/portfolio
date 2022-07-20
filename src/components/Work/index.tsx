import { FC, useState, useEffect } from "react";
import Image from "next/image";
import {
	StyledWorkSection,
	WorkInfoContainer,
	YearOfWork,
	JobDescription,
	WorkProduct,
	YearButton,
	YearActiveBar,
	StyledGiTriangleTarget,
} from "./work.styled";
import { images } from "Constants";
import { jobsWithLang, JobInterface, yearsWithLang, JobYear } from "Constants";
import { useLangContext } from "context";

const WorkExperience: FC<{}> = () => {
	const [activeIndex, setActiveIndex] = useState<number>(0);
	const { lang } = useLangContext();
	const [jobLang, setJobLang] = useState<JobInterface[]>([]);
	const [job, setJob] = useState<JobInterface | undefined>();

	useEffect(() => {
		setJobLang(jobsWithLang[lang]);
	}, [lang]);

	useEffect(() => {
		setJob(jobLang[activeIndex]);
	}, [activeIndex, jobLang]);

	const handleYearChange = (index: number) => {
		setActiveIndex(index);
	};

	return (
		<StyledWorkSection id="work">
			<h2>{lang === "EN" ? "Work Experience" : "工作经验"}</h2>

			<WorkInfoContainer>
				<YearOfWork>
					{yearsWithLang[lang].map((year: JobYear, index: number) => (
						<YearButton
							className={index === activeIndex ? "active" : ""}
							key={year}
							onClick={() => handleYearChange(index)}
						>
							{year}
						</YearButton>
					))}
					<YearActiveBar index={activeIndex} />
				</YearOfWork>

				<JobDescription>
					<h3>{job?.jobTitle}</h3>
					<p>{job?.company}</p>
					<ul>
						{job?.jobDescription.split(";").map((desc, index) => (
							<li key={index}>
								<StyledGiTriangleTarget />
								<span>{desc}</span>
							</li>
						))}
					</ul>
				</JobDescription>

				{/* <WorkProduct>
          <div className="picture-wrapper">
            <div className="img-wrapper">
              <picture>
                <img src={images.workdemo.src} width="100%" height="100%" />
              </picture>
            </div>
          </div>
        </WorkProduct> */}
			</WorkInfoContainer>
		</StyledWorkSection>
	);
};

export default WorkExperience;
