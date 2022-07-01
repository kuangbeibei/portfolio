import { FC } from 'react'
import { Footer as StyledFooter, Socials, SocialWrapper, Copyright, StyledHiOutlineMail } from './footer.styled';
import { social } from 'Constants';

const Footer: FC<{}> = () => {
    return (
        <StyledFooter>
            <SocialWrapper>
                <Socials>
                    {
                        social.map(item => <li key={item.name}>
                            <a href={item.url} target="_blank" aria-label={item.name}><item.icon /></a>
                        </li>)
                    }
                </Socials>
            </SocialWrapper>
            <Copyright>Built by Kuangbeibei @2022 All Rights Reserved</Copyright>
            <div><StyledHiOutlineMail /></div>
        </StyledFooter>
    )
}

export default Footer;
