
export interface JobInterface {
    year: string
    company: string
    jobTitle: string
    jobDescription: string
    produceImage: string
}

export type JobYear = JobInterface['year']

export const yearsEn: Array<JobYear> = [
    '10/2018 - 04/2022',
    '06/2016 - 09/2018',
    '09/2015 - 06/2018',
    'before 09/2015'
]

export const yearsCH: Array<JobYear> = [
    '10/2018 - 04/2022',
    '06/2016 - 09/2018',
    '09/2015 - 06/2018',
    '09/2015 之前'
]

export const yearsWithLang = {
    CH: yearsCH,
    EN: yearsEn
}

const jobsEn: Array<JobInterface> = [
    {
        year: '10/2018 - 04/2022',
        company: 'Yonghui Supermarket Corporation',
        jobTitle: 'Senior Frontend Developer',
        jobDescription: 'Wrote modern, performant, maintainable code for in-house admin dashboard projects; Worked well independently and within a team setting using different languages, frameworks, and libraries such as JavaScript, React, TypeScript, Node.js, Redux, Styled Components and Ant Design; Communicated with multi-disciplinary teams of engineers, producers on a regular basis; Provided effective troubleshooting and remediation for web applications',
        produceImage: '',
    },
    {
        year: '06/2016 - 09/2018',
        company: 'Sao Tianxia',
        jobTitle: 'Frontend Developer',
        jobDescription: 'Planned, developed, tested, deployed and maintained web applications; Effectively translated client requirements into application designs and systems requirements; Worked with Vue, ElementUI, CSS3, Sass, Webpack, Gulp to build web pages on different sizes of mobile phones; Followed policies and procedures related to application methods and quality standards at all times',
        produceImage: '',
    },
    {
        year: '09/2015 - 06/2016',
        company: 'Zhu Baijia',
        jobTitle: 'Frontend Developer',
        jobDescription: 'Developed and maintained code primarily using HTML5, CSS3, JavaScript, and jQuery; Worked at an independent level, while also serving as an effective and enthusiastic collaborator; Implemented and updated application modules under the direction of Senior Software Developers',
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

const jobsCH: Array<JobInterface> = [
    {
        year: '10/2018 - 04/2022',
        company: '北京永辉超市科技有限公司 - 大型连锁超市',
        jobTitle: '高级开发',
        jobDescription: '给公司内部多个管理系统编写健硕、易于维护的程序代码; 独立负责业务线的系统设计和技术实现; 在合作项目中提供基础设施和公共组件支持; 帮助其他研发解决开发过程中的疑难问题及排查线上bug; 主要技术: React, Typescript, Nodejs, Redux, React Router, Ant Design, Axios, Styled Components, Webpack, Vue等',
        produceImage: '',
    },
    {
        year: '06/2016 - 09/2018',
        company: '北京扫天下科技有限公司 - 市场营销公司',
        jobTitle: '前端开发',
        jobDescription: '与产品和烟草公司对接市场营销方案和需求，就前端开发可行性和交互提出建议; 开发基于微信生态的H5页面，编写UI还原度高，足够抽象且易维护的程序代码，与后端开发高效配合并交付测试; 活动上线后第一时间进行线上回测，并跟进项目后续迭代; 主要技术: Vue, ElementUI, Sass, Webpack, Axios, Gulp, jQuery等',
        produceImage: '',
    },
    {
        year: '09/2015 - 06/2016',
        company: '住百家 - 民宿平台',
        jobTitle: '前端开发',
        jobDescription: '参与合作开发桌面端民宿详情页面中部分模块，独立开发移动端活动运营宣传网页; 使用HTML5, CSS3参与网站首页样式重构; 主要技术: HTML、CSS、JavaScript、jQuery; 公司项目前后端未分离，合作后端框架为Ruby on Rails',
        produceImage: '',
    },
    {
        year: '09/2015 之前',
        company: '网易',
        jobTitle: '国际新闻编辑',
        jobDescription: '日常编译国外重大新闻或有趣事件(来源路透社、法新社、共同社、韩联社、BBC、DailyMail等); 定期就重大节日、突发性新闻事件策划新闻专题; 与网页设计师就策划页的主题、样式、交互等进行沟通，此为后来做前端开发进行了铺陈',
        produceImage: '',
    }
]

const jobsWithLang = {
    EN: jobsEn,
    CH: jobsCH
}

export default jobsWithLang;