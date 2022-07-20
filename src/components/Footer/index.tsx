import { FC } from "react";
import {
	Footer as StyledFooter,
	Socials,
	SocialWrapper,
	Copyright,
	StyledHiOutlineMail,
} from "./footer.styled";
import { social } from "Constants";

const Footer: FC<{}> = () => {
	return (
		<StyledFooter>
			<SocialWrapper>
				<Socials>
					{social.map((item) => (
						<li key={item.name}>
							<a href={item.url} target="_blank" aria-label={item.name}>
								<item.icon />
							</a>
						</li>
					))}
				</Socials>
			</SocialWrapper>
			<Copyright>Built by Kuang Dan @2022</Copyright>
			<div>
				<a href="mailto:332518418@qq.com"><StyledHiOutlineMail /></a>
			</div>
		</StyledFooter>
	);
};

export default Footer;
