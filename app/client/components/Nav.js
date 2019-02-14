import Link from "next/link";
import styled from "styled-components";

const StyledNav = styled.nav`
  .nav-link,
  .logo {
    text-decoration: none;
  }

  .logo {
    display: inline-block;
    margin-top: 10px;
    margin-left: 20px;
  }

  .nav-toggle {
    position: absolute;
    top: 10px;
    right: 20px;
    cursor: pointer;
    font-size: 2em;
  }

    .main-nav {
      display: none;
    }
    
    .responsive-nav {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      margin-top: 15px;
      padding: 20px;
      /* background-color: ${props => props.theme.lightGrey}; */
      border: 1px solid ${props => props.theme.lightGrey};
      .nav-link {
        color: ${props => props.theme.coral};
        font-weight: 400;
        margin-bottom: 10px;

      }
    }

  @media screen and (min-width: 768px) {
    .navbar {
      display: flex;
      justify-content: space-between;
      padding: 0 20px;
      height: 120px;
      align-items: center;
    }
    
    .responsive-nav,
    .main-nav {
      display: flex;
      flex-direction: row;
      align-items: flex-end;
      margin-right: 30px;
      border: none;

      .nav-link {
      margin: 0 1.5rem;
      color: ${props => props.theme.navy};

      :last-child {
        margin-right: 0;
      }

      :hover {
        color: ${props => props.theme.coral};
      }
    }
    }

    .logo {
      font-family: "Lobster", cursive;
      font-size: 20px;
      color: ${props => props.theme.coral};
      margin-top: 0;
    }

    .nav-toggle {
      display: none;
    }

    /* .logo:hover,
    .nav-links:hover {
      color: ${props => props.theme.coral};
    } */
  }
`;

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
      <StyledNav>
        <nav className="navbar">
          <span onClick={() => this.toggleMenu()} className="nav-toggle">
            <i className="fas fa-bars" />
          </span>
          <Link href="#">
            <a className="logo">Sheldon Miller Hair</a>
          </Link>
          <div onClick={() => this.hideMenuOnNav()} className={this.state.nav}>
            <Link href="/mystory">
              <a className="nav-link">My Story</a>
            </Link>
            <Link href="/services">
              <a className="nav-link">Services</a>
            </Link>
            <Link href="/mywork">
              <a className="nav-link">My Work</a>
            </Link>
            <Link href="/contact">
              <a className="nav-link">Contact Me</a>
            </Link>
          </div>
        </nav>
      </StyledNav>
    );
  }
}

export default Nav;
