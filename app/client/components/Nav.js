import Link from "next/link";
import styled from "styled-components";

const StyledNav = styled.nav`
  #mobile-nav {
    display: none;

    .nav-link {
      margin: 0 1.5rem;

      :last-child {
        margin-right: 0;
      }

      :hover {
        color: ${props => props.theme.coral};
      }
    }
  }

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

  .active {
    display: block;
  }


    #notActive {
      display: none
    }

    #active {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      margin-top: 15px;
      padding: 20px;
      /* background-color: ${props => props.theme.lightGrey}; */
      border: 1px solid ${props => props.theme.lightGrey};
      a {
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

    #mobile-nav {
      display: flex;
      margin-right: 30px;
      flex-direction: row;
      justify-content: flex-end;
    }

    .nav-link {
      margin-left: 0 0.5rem;
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
      active: "notActive"
    };
  }

  toggleMenu() {
    const { active } = this.state;

    this.setState({
      active: active === "notActive" ? "active" : "notActive"
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
          <div
            onClick={() => this.toggleMenu()}
            className="mobile-nav"
            id={this.state.active}
          >
            <Link href="/mystory">
              <a className="nav-link">My Story</a>
            </Link>
            <Link href="/services">
              <a className="nav-link">Services</a>
            </Link>
            <Link href="/mywork">
              <a className="nav-link">My Work</a>
            </Link>
            <Link href="/theblog">
              <a className="nav-link">The Blog</a>
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
