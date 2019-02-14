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
      <Link href="/contact">
        <a>Contact</a>
      </Link>
      <div className="social">
        <a href="https://www.facebook.com/sheldon.craft.9">
          <i className="fab fa-facebook-f" />
        </a>
        <a href="https://www.instagram.com/blondedandbrushed/">
          <i className="fab fa-instagram" />
        </a>
      </div>
    </div>
  </FooterStyles>
);

export default Footer;
