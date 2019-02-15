import ServiceListItemStyles from "../styled/services/ServiceListItemStyles";

class ServiceListItem extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const serviceItem = this.props.details;
    return (
      <ServiceListItemStyles>
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
      </ServiceListItemStyles>
    );
  }
}

export default ServiceListItem;
