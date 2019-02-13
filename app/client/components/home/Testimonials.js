import styled from "styled-components";

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
    font-family: "Lobster", cursive;
    color: ${props => props.theme.coral};
  }
  b {
    font-size: 1.8em;
    color: ${props => props.theme.midGrey};
    font-weight: 200;
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

  @media (max-width: 696px) {
    .heading {
      span {
        font-size: 4em;
      }
    }
    .clients {
      ul {
        flex-direction: column;

        li {
          padding: 15px 0;
        }
      }
    }
    .testimonial {
      width: 100%;

      p {
        display: none;
      }
    }
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
            <b>client of 3 years</b>
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
            <b>client of 3 years</b>
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
