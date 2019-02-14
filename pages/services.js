import Link from "next/link";
import styled from "styled-components";
import ServiceList from "../components/services/ServiceList";

const StyledMyWorkHeader = styled.header`
  padding: 50px 0;
  background-color: #fff;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cg fill='%23d49f9b' fill-opacity='0.09'%3E%3Cpolygon fill-rule='evenodd' points='8 4 12 6 8 8 6 12 4 8 0 6 4 4 6 0 8 4'/%3E%3C/g%3E%3C/svg%3E");
  h1 {
    position: relative;
    display: inline-block;
    padding: 0 100px;
    margin-left: 10%;
    border: 1px solid ${props => props.theme.lightGrey};
    span {
      position: absolute;
      right: -138px;
      bottom: -54px;
      font-family: "Lobster", cursive;
      color: ${props => props.theme.coral};
      text-transform: lowercase;
    }
  }

  @media (max-width: 696px) {
    text-align: center;
    h1 {
      margin-left: 0;
      padding: 25px;

      span {
        right: 2%;
        bottom: -15%;
      }
    }
  }
`;

const StyledServices = styled.section`
  padding-top: 0;
  .service-content {
    display: flex;
    align-self: center;
    justify-content: center;
  }
`;

const Services = () => (
  <StyledServices>
    <StyledMyWorkHeader>
      <h1>
        Top Notch <span>service's</span>
      </h1>
    </StyledMyWorkHeader>
    <div className="service-content">
      <ServiceList />
    </div>
  </StyledServices>
);

export default Services;
