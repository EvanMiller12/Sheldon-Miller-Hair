import Link from "next/link";
import styled from "styled-components";
import Header from "../components/home/Header";
import PortfolioHome from "../components/home/PortfolioHome";
import Testimonials from "../components/home/Testimonials";
import ServicesHome from "../components/home/ServicesHome";
import NavigationOptions from "../components/home/NavigationOptions";

const InnerContent = styled.main`
  /* max-width: ${props => props.theme.maxWidth}; */
  margin: 0 auto;
  /* padding: 2rem 0; */
`;

const Index = () => (
  <InnerContent>
    <Header />
    <PortfolioHome />
    <Testimonials />
    <ServicesHome />
    <NavigationOptions />
  </InnerContent>
);

export default Index;
