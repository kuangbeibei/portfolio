import { useLangContext } from "context";
import { EmailFixedWrapper, VerticalLine, Alink } from "./styled";
import { SiMinutemailer } from "react-icons/si";

export default function RightEmailBar() {
	const { lang } = useLangContext();
	return (
		<>
			<EmailFixedWrapper>
				<Alink href="mailto:332518418@qq.com" letterSpacing={lang === 'CH' ? true : false}>
					<SiMinutemailer />
					{` `}
					{lang === "EN" ? "Contact Me" : "与我联系"}
				</Alink>
			</EmailFixedWrapper>
			<VerticalLine chHeight={lang === 'CH'}/>
		</>
	);
}
