import HeaderStyles from "./styled/HeaderStyles";

const Header = props => (
  <HeaderStyles>
    <h1>
      {props.heading}
      <span>{props.subheading}</span>
    </h1>
  </HeaderStyles>
);

export default Header;
