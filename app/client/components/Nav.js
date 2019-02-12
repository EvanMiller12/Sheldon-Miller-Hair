import Link from "next/link";
import styled from "styled-components";

const StyledNav = styled.nav`
  .main-nav {
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

  @media screen and (min-width: 768px) {
    .navbar {
      display: flex;
      justify-content: space-between;
      padding: 0 20px;
      height: 120px;
      align-items: center;
    }

    .main-nav {
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

const Nav = () => (
  <StyledNav>
    <nav className="navbar">
      <span className="nav-toggle">
        <i className="fas fa-bars" />
      </span>
      <Link href="#">
        <a className="logo">Sheldon Miller Hair</a>
      </Link>
      <div className="main-nav">
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

export default Nav;
