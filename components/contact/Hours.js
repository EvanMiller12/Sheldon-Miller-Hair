import HoursStyles from "../styled/contact/HoursStyles";

const Hours = () => (
  <HoursStyles>
    <h3 className="hours-heading">My Hours</h3>
    <div className="hours-contain">
      <div>
        <h5>SUN</h5>
        <span className="closed">closed</span>
      </div>
      <div>
        <h5>MON</h5>
        <span>8am - 8pm</span>
      </div>
      <div>
        <h5>TUE</h5>
        <span>8am - 8pm</span>
      </div>
      <div>
        <h5>WED</h5>
        <span>8am - 8pm</span>
      </div>
      <div>
        <h5>THU</h5>
        <span>8am - 8pm</span>
      </div>
      <div>
        <h5>FRI</h5>
        <span>8am - 8pm</span>
      </div>
      <div>
        <h5>SAT</h5>
        <span>8am - 8pm</span>
      </div>
    </div>
  </HoursStyles>
);

export default Hours;
