import { FC, useState } from "react";
import { ContactSection, MessagerInfo } from "./contact.styled";
import { useForm, SubmitHandler } from "react-hook-form";
import { IFormInput } from "./contact";
import { useLangContext } from "context";

const Contact: FC<{}> = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<IFormInput>();

	const [submitted, setSubmitted] = useState<boolean>(false);

	const { lang } = useLangContext();

	const onSubmit: SubmitHandler<IFormInput> = async (data) => {
		try {
			const result = await fetch("/api/sendMessage", {
				method: "POST",
				body: JSON.stringify(data),
			});
			setSubmitted(true);
			console.log("result", result);
		} catch (e) {
			setSubmitted(false);
			console.log("submit message error:", e);
		}
	};

	return (
		<ContactSection id="contact">
			<h2>{lang === "EN" ? "Get In Touch" : "与我联系"}</h2>
			<p>software, anywhere</p>
			{submitted ? (
				<div className="message_submitted">
					{lang === "EN"
						? "Thank you for leaving the message, I'll reach to you soon!😺"
						: "信息收到，我将很快回复您！😺"}
				</div>
			) : (
				<form onSubmit={handleSubmit(onSubmit)}>
					<MessagerInfo>
						<div className="name">
							<input
								{...register("name", { required: true })}
								name="name"
								type="text"
								placeholder={lang === "EN" ? "your name please" : "请输入名称"}
							/>
							{errors.name && (
								<div className="field_errormsg">
									{lang === "EN" ? "The Name Field is required. " : "姓名必填"}
								</div>
							)}
						</div>
						<div className="email">
							<input
								{...register("email", { required: true })}
								name="email"
								type="email"
								placeholder={
									lang === "EN" ? "your name please" : "请输入邮箱地址"
								}
							/>
							{errors.email && (
								<div className="field_errormsg">
									{lang === "EN"
										? "The message Field is required."
										: "邮箱地址必填"}
								</div>
							)}
						</div>
						<div className="textarea">
							<textarea
								{...register("message", { required: true })}
								name="message"
								placeholder={
									lang === "EN"
										? "Hi, I'm glad to hire you  ^ V ^"
										: "请输入你想写的..."
								}
							/>
							{errors.message && (
								<div className="field_errormsg">
									{lang === "EN"
										? "The message Field is required."
										: "留言内容必填"}
								</div>
							)}
						</div>
					</MessagerInfo>
					<button type="submit">
						{lang === "EN" ? "Send Message" : "发送"}
					</button>
				</form>
			)}
		</ContactSection>
	);
};

export default Contact;
