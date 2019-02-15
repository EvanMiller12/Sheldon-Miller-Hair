import ContactInfoStyles from "./styled/ContactInfoStyles";

const ContactInfo = () => (
  <ContactInfoStyles>
    <div className="contact-contain">
      <div className="contact-col">
        <h5>Personal</h5>
        <a href="mailto:sheldon@sheldonmillerhair.com">
          sheldon@sheldonmillerhair.com
        </a>
        <br />
        <span className="phone">864-934-5324</span>
      </div>
      <div className="contact-col">
        <h5>Salon</h5>
        <span>Vintage Hair Loft</span>
        <address>4152 Clemson Blvd, Anderson, SC 29621</address>
        <br />
        <span className="phone">864-231-7539</span>
      </div>
      <div className="contact-col">
        <h5>Social</h5>
        <ul>
          <li>
            <a href="https://www.facebook.com/sheldon.craft.9">
              <i className="fab fa-facebook-f" /> Facebook
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/blondedandbrushed/">
              <i className="fab fa-instagram" /> Instagram
            </a>
          </li>
        </ul>
      </div>
    </div>
  </ContactInfoStyles>
);

export default ContactInfo;
