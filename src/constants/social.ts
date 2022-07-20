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
        url: ''
    },
    {
        name: 'Twitter',
        icon: FiTwitter,
        url: ''
    },
    {
        name: 'LinkedIn',
        icon: FiLinkedin,
        url: ''
    },
    {
        name: 'Codepen',
        icon: FiCodepen,
        url: ''
    }
];

export default socialItems;