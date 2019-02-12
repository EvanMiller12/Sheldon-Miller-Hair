import Link from 'next/link';
import styled from 'styled-components';

// scope styles

const StyledServiceListItem = styled.li``;

class ServiceListItem extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const serviceItem = this.props.details;
    return (
      <li className="service-item">
        <div className="l-col">
          <h3>{serviceItem.service}</h3>
          <img src="../static/hair2.jpg" alt="" />
        </div>
        <div className="r-col">
          <h4>Pricing</h4>
          <div className="service-detail-contain">
            <div className="service-header">
              <b>Detail</b>
              <b>Price</b>
            </div>
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
      </li>
    );
  }
}

export default ServiceListItem;
