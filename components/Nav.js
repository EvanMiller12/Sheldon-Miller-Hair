import Link from "next/link";
import styled from "styled-components";
import NavStyles from "./styled/NavStyles";

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      nav: "main-nav"
    };
  }

  toggleMenu() {
    const { active } = this.state;

    this.setState({
      active: !active,
      nav: active ? "responsive-nav" : "main-nav"
    });
  }

  hideMenuOnNav() {
    const { nav } = this.state;

    if (nav === "main-nav") return;

    this.setState({
      nav: "main-nav"
    });
  }
  render() {
    return (
      <NavStyles>
        <nav className="navbar">
          <span onClick={() => this.toggleMenu()} className="nav-toggle">
            <i className="fas fa-bars" />
          </span>
          <Link prefetch href="/">
            <a className="logo">Sheldon Miller Hair</a>
          </Link>
          <div onClick={() => this.hideMenuOnNav()} className={this.state.nav}>
            <Link prefetch href="/mystory">
              <a className="nav-link">My Story</a>
            </Link>
            <Link prefetch href="/services">
              <a className="nav-link">Services</a>
            </Link>
            <Link prefetch href="/mywork">
              <a className="nav-link">My Work</a>
            </Link>
            <Link prefetch href="/contact">
              <a className="nav-link">Contact Me</a>
            </Link>
          </div>
        </nav>
      </NavStyles>
    );
  }
}

export default Nav;
