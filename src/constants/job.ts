
export interface JobInterface {
    year: string
    company: string
    jobTitle: string
    jobDescription: string
    produceImage: string
}

export type JobYear = JobInterface['year']

export const Years: Array<JobYear> = [
    '10/2018 - 03/2022',
    '06/2016 - 09/2018',
    '09/2015 - 06/2018',
    'before 09/2015'
]

const jobs: Array<JobInterface> = [
    {
        year: '10/2018 - 03/2022',
        company: 'Yonghui Supermarket Corporation',
        jobTitle: 'Senior Developer',
        jobDescription: 'Wrote modern, performant, maintainable code for in-house admin dashboard projects; Worked well independently and within a team setting using different languages, frameworks, and libraries such as JavaScript, React, TypeScript, Redux, Styled Components and Ant Design; Communicated with multi-disciplinary teams of engineers, producers on a regular basis; Provided effective troubleshooting and remediation for web applications',
        produceImage: '',
    },
    {
        year: '06/2016 - 09/2018',
        company: 'Sao Tianxia',
        jobTitle: 'Web Developer',
        jobDescription: 'Planned, developed, tested, deployed and maintained web applications; Effectively translated client requirements into application designs and systems requirements; Worked with Vue, ElementUI, CSS3, Sass, Webpack, Gulp to build web pages on different sizes of mobile phones; Followed policies and procedures related to application methods and quality standards at all times',
        produceImage: '',
    },
    {
        year: '09/2015 - 06/2018',
        company: 'Zhu Baijia',
        jobTitle: 'Web Developer',
        jobDescription: 'Developed and maintained code primarily using HTML, CSS, Sass, JavaScript, and jQuery; Worked at an independent level, while also serving as an effective and enthusiastic collaborator; Implemented and updated application modules under the direction of Senior Software Developers',
        produceImage: '',
    },
    {
        year: 'before 09/2015',
        company: 'Netease',
        jobTitle: 'Web News Editor',
        jobDescription: 'Translated major international news into Chinese on a daily basis and published on the website; Planned featured subject regularly based on breaking news or important dates; Work closely with web designers to decide the theme, color, background, featured images and other elements of a certain topic news on the website',
        produceImage: '',
    }
];

export default jobs;