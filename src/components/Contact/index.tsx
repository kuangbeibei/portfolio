import { FC } from 'react'
import { ContactSection, MessagerInfo } from "./contact.styled";

const Contact: FC<{}> = () => {
  return (
    <ContactSection>
      <h2>Get In Touch</h2>
      <p>software, anywhere</p>
      <MessagerInfo>
        <input name="name" placeholder='please leave your name' />
        <input name="email" placeholder='please leave your email' />
        <textarea name="message" placeholder="please leave your message" />
      </MessagerInfo>
      <button>Send Message</button>
    </ContactSection>
  )
}

export default Contact;
