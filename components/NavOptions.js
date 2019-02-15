import Link from "next/link";
import styled from "styled-components";

const StyledNavigationOptions = styled.section`
  .nav-options-content {
    display: flex;
    justify-content: space-around;
    align-items: center;

    a {
      border: 1px solid ${props => props.theme.navy};
      padding: 10px;
      text-align: center;
    }

    a:hover {
      color: ${props => props.theme.coral};
    }
  }
`;

const NavOptions = () => (
  <StyledNavigationOptions>
    <div className="nav-options-content">
      <Link href="services">
        <a>My Services</a>
      </Link>
      <Link href="">
        <a>Book An Appointment</a>
      </Link>
      <Link href="mywork">
        <a>View More Of My Work</a>
      </Link>
    </div>
  </StyledNavigationOptions>
);

export default NavOptions;
