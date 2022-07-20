export interface ProjectInterface {
    name: string
    desc: string
    technologies: Array<string>,
    github: string,
    demo?: string
}

export const projectCH: Array<ProjectInterface> = [
    {
        name: 'React简易实现',
        desc: '简单实现React17.0.2版本，梳理ReactDom.render的过程，理解合成事件和批量更新，以及hooks api等',
        technologies: ['JavaScript', 'Webpack', 'Babel'],
        github: 'https://github.com/kuangbeibei/react-simple-realization',
    },
    {
        name: 'Headless CMS Blog',
        desc: '基于GraphCMS开发的响应式blog页面，包含特色文章、近期文章、类别，留言评论功能等',
        technologies: ['React', 'Next.js', 'GraphQl', 'Tailwindcss'],
        github: 'https://github.com/kuangbeibei/graphcms_blog',
    },
    {
        name: '模拟TikTok',
        desc: '提供google第三方登录的短视频浏览和发布应用',
        technologies: ['React', 'Next.js', 'Sanity', 'Google OAuth', 'Zustand', 'Tailwindcss'],
        github: 'https://github.com/kuangbeibei/tiktik',
    }
]

export const projectEN: Array<ProjectInterface> = [
    {
        name: 'Simple React Realization',
        desc: 'To better understanding the workflow of React v17.0.2 about synthetic event and batch update, as well as hooks api, etc.',
        technologies: ['JavaScript', 'Webpack', 'Babel'],
        github: 'https://github.com/kuangbeibei/react-simple-realization'
    },
    {
        name: 'Headless CMS Blog',
        desc: 'Responsive blog website with featured and recent posts, categories. full markdown articles, author information, comments, etc',
        technologies: ['React', 'Next.js', 'GraphQl', 'Tailwindcss'],
        github: 'https://github.com/kuangbeibei/graphcms_blog',
    },
    {
        name: 'Clone TikTok',
        desc: 'A responsive web app provides short-cut videos waching and publishing, using @react-oauth/google',
        technologies: ['React', 'Next.js', 'Sanity', 'Google OAuth', 'Zustand', 'Tailwindcss'],
        github: 'https://github.com/kuangbeibei/tiktik',
    }
]

const projectWithLang = {
    CH: projectCH,
    EN: projectEN
}

export default projectWithLang;