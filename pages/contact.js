import Header from "../components/Header";
import ContactForm from "../components/contact/ContactForm";
import Hours from "../components/contact/Hours";

const Contact = () => (
  <div>
    <Header heading="lets" subheading="chat" />
    <ContactForm />
    <Hours />
  </div>
);

export default Contact;
