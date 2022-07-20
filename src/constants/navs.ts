export interface NavLinkInterface {
    title: string
    link: string
    isActive: boolean
}

const navsEN: Array<NavLinkInterface> = [
    {
        title: 'About',
        link: '#about',
        isActive: false,
    },
    {
        title: 'Work',
        link: '#work',
        isActive: false,
    },
    {
        title: 'Skill',
        link: '#skill',
        isActive: false,
    },
    {
        title: 'Project',
        link: '#project',
        isActive: false,
    },
    {
        title: 'Contact',
        link: '#contact',
        isActive: false,
    }
];

const navsCH: Array<NavLinkInterface> = [
    {
        title: '关于我',
        link: '#about',
        isActive: false,
    },
    {
        title: '工作',
        link: '#work',
        isActive: false,
    },
    {
        title: '技能',
        link: '#skill',
        isActive: false,
    },
    {
        title: '项目',
        link: '#project',
        isActive: false,
    },
    {
        title: '联系',
        link: '#contact',
        isActive: false,
    }
];

const navsWithLang = {
    CH: navsCH,
    EN: navsEN
}

export default navsWithLang;