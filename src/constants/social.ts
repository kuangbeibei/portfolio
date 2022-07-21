import { FiGithub, FiInstagram, FiTwitter, FiLinkedin, FiCodepen } from "react-icons/fi";

interface SocialInterface {
    name: string,
    icon: any,
    url: string
}

const socialItems: Array<SocialInterface> = [
    {
        name: 'Github',
        icon: FiGithub,
        url: 'https://github.com/kuangbeibei'
    },
    {
        name: 'Instagram',
        icon: FiInstagram,
        url: 'https://www.instagram.com/danakuang'
    },
    {
        name: 'Twitter',
        icon: FiTwitter,
        url: 'https://twitter.com/beibei0201'
    },
    // {
    //     name: 'LinkedIn',
    //     icon: FiLinkedin,
    //     url: ''
    // },
    {
        name: 'Codepen',
        icon: FiCodepen,
        url: 'https://codepen.io/kuangbeibei'
    }
];

export default socialItems;