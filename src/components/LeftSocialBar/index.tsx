import { SocialFixedWrapper, Socials, VerticalLine } from "./styled";
import { social } from "Constants";

export default function index() {
	return (
		<>
			<SocialFixedWrapper>
				<Socials>
					{social.map((item) => (
						<li key={item.name}>
							<a href={item.url} target="_blank" aria-label={item.name}>
								<item.icon />
							</a>
						</li>
					))}
				</Socials>
			</SocialFixedWrapper>
			<VerticalLine />
		</>
	);
}
