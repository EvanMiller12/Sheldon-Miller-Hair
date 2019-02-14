import styled from "styled-components";
import Header from "../components/home/Header";
import PortfolioHome from "../components/home/PortfolioHome";
import Testimonials from "../components/home/Testimonials";
import ServicesHome from "../components/home/ServicesHome";
import NavigationOptions from "../components/home/NavigationOptions";

const InnerContent = styled.main`
  margin: 0 auto;
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
