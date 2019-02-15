import Link from "next/link";
import FooterStyles from "./styled/FooterStyles";

const Footer = () => (
  <FooterStyles>
    <div className="footer-content">
      <span>SO WHATS NEXT?</span>
      <h3>I'M READY</h3>
      <a>lets chat!</a>
    </div>

    <div className="copy-rights">
      <span>&copy; Sheldon Miller Hair</span>
    </div>
  </FooterStyles>
);

export default Footer;
