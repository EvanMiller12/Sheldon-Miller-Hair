import Link from 'next/link';
import styled from 'styled-components';
import ServiceListItem from './ServiceListItem';
// scope styles

const StyledServiceList = styled.ul`
width: 80%;
  .service-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 50px;
    h3 {
      text-align: center;
      margin: 0;
    }
    h4 {
      text-align: center;
      font-size: 3em;
      font-weight: 100;
      letter-spacing: 2px;
      /* color: ${props => props.theme.lightGrey}; */
    }
    .l-col,
    .r-col {
      display: inline-block;
      width: 48%;
    }
    .service-detail-contain {
      padding: 0 25px;

    }
    .service-header {
          display: flex;
          justify-content: space-between;
          font-size: 2em;
          font-weight: 500;
          color: ${props => props.theme.coral};
        }

        .service-detail {
          display: flex;
          justify-content: space-between;
          padding: 10px 0;
          font-size: 1.7em;
          border-bottom: 1px solid ${props => props.theme.lightGrey};
        }
    }
    .book-now {
      text-align: center;
      margin-top: 40px;
      a {
        border: 1px solid;
        padding: 5px 15px;
      }
    }
  }

  /* .service-detail {
    display: flex;
    justify-content: space-between;
  } */
  /* .detail-heading {
    display: flex;
    justify-content: space-between;
  } */
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
    service: 'Blonding & Balayage',
    details: [
      {
        detail: 'Zone',
        price: '$85.00'
      },
      {
        detail: 'Partial or Full',
        price: '$100.00'
      },
      {
        detail: 'including Gloss',
        price: '$115.00'
      }
    ]
  },
  service2: {
    service: 'Intuitive Color',
    details: [
      {
        detail: 'Base touch-up',
        price: '$50.00+'
      },
      {
        detail: 'All over color',
        price: '$80.00+'
      },
      {
        detail: 'Gloss',
        price: '$30.00'
      }
    ]
  },
  service3: {
    service: 'Cutting & Styling',
    details: [
      {
        detail: 'Womens Haircut',
        price: '$50.00'
      },
      {
        detail: 'Mens Haircut',
        price: '$30.00'
      },
      {
        detail: 'Blowout',
        price: '$40.00'
      },
      {
        detail: 'Blowout w/ Conditioning Treatments',
        price: '$85.00+'
      }
    ]
  }
};

export default ServiceList;
