import Link from "next/link";
import styled from "styled-components";

// scope styles

const StyledServiceListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 4rem 0;
  border-bottom: 1px solid ${props => props.theme.lightGrey};

  :first-child {
    padding-top: 0;
  }

  :last-child {
    border: none;
  }

  h3 {
    text-align: center;
    margin: 0;
  }

  h4 {
    text-align: center;
    font-size: 3em;
    color: ${props => props.theme.coral};
    font-weight: 100;
    letter-spacing: 2px;
  }

  .l-col,
  .r-col {
    display: inline-block;
    width: 48%;
  }

  .service-detail-contain {
    padding: 0 25px;
  }

  .service-detail {
    display: flex;
    justify-content: space-between;
    padding: 10px 0;
    font-size: 1.7em;
    color: ${props => props.theme.midGrey};
    border-bottom: 1px dotted ${props => props.theme.lightGrey};
  }
  .book-now {
    text-align: center;
    margin-top: 40px;
    a {
      padding: 5px 15px;
      color: #fff;
      background-color: ${props => props.theme.navy};
      border: 2px solid ${props => props.theme.navy};

      :hover {
        color: ${props => props.theme.navy};
        background-color: #fff;
      }
    }
  }
`;

class ServiceListItem extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const serviceItem = this.props.details;
    return (
      <StyledServiceListItem>
        <div className="l-col">
          <h3>{serviceItem.service}</h3>
          <img src="../static/hair2.jpg" alt="" />
        </div>
        <div className="r-col">
          <h4>Pricing</h4>
          <div className="service-detail-contain">
            {serviceItem.details.map((item, index) => {
              return (
                <div key={index} className="service-detail">
                  <span>{item.detail}</span>
                  <span>{item.price}</span>
                </div>
              );
            })}
          </div>
          <div className="book-now">
            <a href="">Book Now</a>
          </div>
        </div>
      </StyledServiceListItem>
    );
  }
}

export default ServiceListItem;
