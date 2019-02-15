import ContactFormStyles from "../styled/contact/ContactFormStyles";

const ContactForm = () => (
  <ContactFormStyles>
    <div className="contain">
      <div className="small-contain">
        <p>I am excited to find out more about you!</p>
        <form action="">
          <input type="text" placeholder="Full Name" />
          <input type="text" placeholder="Email" />
          <input type="text" placeholder="Phone" />
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Message..."
          />
          <button type="submit">SEND</button>
        </form>
      </div>
    </div>
  </ContactFormStyles>
);

export default ContactForm;
