import { FC, useState } from "react";
import { ContactSection, MessagerInfo } from "./contact.styled";
import { useForm, SubmitHandler } from "react-hook-form";
import { IFormInput } from "./contact";

const Contact: FC<{}> = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<IFormInput>();

	const [submitted, setSubmitted] = useState<boolean>(false);

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
			<h2>Get In Touch</h2>
			<p>software, anywhere</p>
			{submitted ? (
				<div className="message_submitted">
					Thank you for leaving the message, I'll reach to you soon!😺
				</div>
			) : (
				<form onSubmit={handleSubmit(onSubmit)}>
					<MessagerInfo>
						<div className="name">
							<input
								{...register("name", { required: true })}
								name="name"
								type="text"
								placeholder="your name please"
							/>
							{errors.name && (
								<div className="field_errormsg">
									The Name Field is required.
								</div>
							)}
						</div>
						<div className="email">
							<input
								{...register("email", { required: true })}
								name="email"
								type="email"
								placeholder="your email please"
							/>
							{errors.email && (
								<div className="field_errormsg">
									The Email Field is required.
								</div>
							)}
						</div>
						<div className="textarea">
							<textarea
								{...register("message", { required: true })}
								name="message"
								placeholder="Hi, I'm glad to hire you  ^ V ^"
							/>
							{errors.message && (
								<div className="field_errormsg">
									The message Field is required.
								</div>
							)}
						</div>
					</MessagerInfo>
					<button type="submit">Send Message</button>
				</form>
			)}
		</ContactSection>
	);
};

export default Contact;
