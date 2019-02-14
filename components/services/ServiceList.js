import Link from "next/link";
import styled from "styled-components";
import ServiceListItem from "./ServiceListItem";
// scope styles

const StyledServiceList = styled.ul`
  width: 80%;
`;

class ServiceList extends React.Component {
  constructor() {
    super();

    this.state = {
      serviceDetail: sampleServices
    };

    this.renderService = this.renderService.bind(this);
  }
  renderService(key) {
    return (
      <ServiceListItem
        key={key}
        index={key}
        details={this.state.serviceDetail[key]}
      />
    );
  }
  render() {
    return (
      <StyledServiceList>
        {Object.keys(this.state.serviceDetail).map(this.renderService)}
      </StyledServiceList>
    );
  }
}
const sampleServices = {
  service1: {
    service: "Blonding & Balayage",
    details: [
      {
        detail: "Zone",
        price: "$85.00"
      },
      {
        detail: "Partial or Full",
        price: "$100.00"
      },
      {
        detail: "including Gloss",
        price: "$115.00"
      }
    ]
  },
  service2: {
    service: "Intuitive Color",
    details: [
      {
        detail: "Base touch-up",
        price: "$50.00+"
      },
      {
        detail: "All over color",
        price: "$80.00+"
      },
      {
        detail: "Gloss",
        price: "$30.00"
      }
    ]
  },
  service3: {
    service: "Cutting & Styling",
    details: [
      {
        detail: "Womens Haircut",
        price: "$50.00"
      },
      {
        detail: "Mens Haircut",
        price: "$30.00"
      },
      {
        detail: "Blowout",
        price: "$40.00"
      },
      {
        detail: "Blowout w/ Conditioning Treatments",
        price: "$85.00+"
      }
    ]
  }
};

export default ServiceList;
