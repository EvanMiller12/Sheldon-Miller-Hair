import TestimonialStyles from "../styled/home/TestimonialStyles";

const Testimonials = () => (
  <TestimonialStyles>
    <div className="heading">
      <h2>MY CLIENTS ARE LIKE</h2>
      <span>family</span>
    </div>
    <div className="clients">
      <ul>
        <li>
          <div className="testimonial">
            <h3>FIRST LAST</h3>
            <b>client of 3 years</b>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Cupiditate voluptatum officiis, corporis omnis inventore ut.
            </p>
          </div>
        </li>
        <li>
          <div className="testimonial">
            <h3>FIRST LAST</h3>
            <b>client of 3 years</b>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Cupiditate voluptatum officiis, corporis omnis inventore ut.
            </p>
          </div>
        </li>
      </ul>
    </div>
  </TestimonialStyles>
);

export default Testimonials;
