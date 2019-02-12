import styled from 'styled-components';

const StyledTestimonials = styled.section`
  .heading {
    text-align: center;
  }
  h2 {
    display: inline-block;
  }
  span {
    margin-left: 30px;
    font-size: 6.5em;
    font-family: 'Lobster', cursive;
    color: ${props => props.theme.coral};
  }
  ul {
    display: flex;
    justify-content: space-around;
  }
  li {
    display: flex;
    justify-content: space-around;
    h3 {
      font-size: 3em;
      margin: 0;
    }
  }
  .testimonial {
    display: inline-block;
    width: 80%;
    text-align: center;
  }
`;

const Testimonials = () => (
  <StyledTestimonials>
    <div className="heading">
      <h2>MY CLIENTS ARE LIKE</h2>
      <span>family</span>
    </div>
    <div className="clients">
      <ul>
        <li>
          <div className="testimonial">
            <h3>FIRST LAST</h3>
            <h4>client of 3 years</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Cupiditate voluptatum officiis, corporis omnis inventore ut.
              Numquam, ab? Quod, reiciendis nam, a accusamus fuga dolorum natus,
              repellendus rerum numquam explicabo mollitia!
            </p>
          </div>
        </li>
        <li>
          <div className="testimonial">
            <h3>FIRST LAST</h3>
            <h4>client of 3 years</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Cupiditate voluptatum officiis, corporis omnis inventore ut.
              Numquam, ab? Quod, reiciendis nam, a accusamus fuga dolorum natus,
              repellendus rerum numquam explicabo mollitia!
            </p>
          </div>
        </li>
      </ul>
    </div>
  </StyledTestimonials>
);

export default Testimonials;
