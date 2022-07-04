export interface NavLinkInterface {
    title: string
    link: string
    isActive: boolean
}

const navs: Array<NavLinkInterface> = [
    {
        title: 'About',
        link: '#about',
        isActive: false,
    },
    {
        title: 'Project',
        link: '#project',
        isActive: false,
    },
    {
        title: 'Skill',
        link: '#skill',
        isActive: false,
    },
    {
        title: 'Work',
        link: '#work',
        isActive: false,
    },
    {
        title: 'Contact',
        link: '#contact',
        isActive: false,
    }
];

export default navs;