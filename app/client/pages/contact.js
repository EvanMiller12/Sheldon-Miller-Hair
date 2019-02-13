import Link from "next/link";
import styled from "styled-components";

const StyledContactHeader = styled.header`
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
  p {
    margin: 0;
    margin-top: 15px;
    margin-left: 15%;
    font-size: 3.3em;
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
    p {
      margin-left: 0;
      font-size: 1.6em;
    }
  }
`;

const StyledContactPage = styled.main`
  .contain {
    display: flex;
    justify-content: center;
  }
  .small-contain {
    width: 50%;

    p {
      font-size: 2.5em;
    }
  }
  form {
    position: relative;
    display: flex;
    flex-direction: column;

    input,
    textarea {
      border: 1px solid ${props => props.theme.lightGrey};
    }

    input {
      height: 50px;
      padding: 20px;
      margin: 10px 0;
      font-size: 2em;
    }

    input:focus {
      color: ${props => props.theme.navy};
      border-top: 1px solid white;
      border-right: 1px solid white;
      border-left: 1px solid white;
      border-bottom: 3px solid ${props => props.theme.coral};
      outline: none;
    }
    textarea {
      padding: 20px;
      font-size: 2em;
    }

    textarea:focus {
      outline: none;
      border: 1px solid ${props => props.theme.coral};
    }
    button {
      position: absolute;
      bottom: -25px;
      right: 25%;
      font-size: 2.5em;
      letter-spacing: 1px;
      font-weight: 500;
      width: 20%;
      padding: 15px 0;
      background-color: ${props => props.theme.coral};
      color: ${props => props.theme.floralWhite};
    }
  }

  .hours-contain {
    display: flex;
    justify-content: space-around;

    div {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 150px;
      height: 150px;
      background-color: #fff;
      border: 1px solid ${props => props.theme.navy};

      span {
        font-size: 1.5em;
        letter-spacing: 1px;
      }
    }
    .closed {
      color: ${props => props.theme.coral};
    }
  }
  .hours-section {
    background-color: ${props => props.theme.floralWhite};
    margin-top: 50px;
    margin-bottom: -50px;
    padding-bottom: 100px;
  }
  .hours-heading {
    color: ${props => props.theme.floralWhite};
    text-shadow: 1px 1px 2px ${props => props.theme.navy},
      -1px -1px 2px ${props => props.theme.navy},
      2px 2px 2px ${props => props.theme.navy};
    letter-spacing: 4px;
    text-align: center;
    margin: 25px 0;
  }

  @media (max-width: 696px) {
    form {
      button {
        width: 60%;
        font-size: 2em;
      }
    }

    .hours-section {
      margin-bottom: -25px;
    }

    .hours-contain {
      flex-direction: column;
      align-items: center;
      div {
        height: 100px;
        text-align: center;
        border: none;
        border-bottom: 1px solid ${props => props.theme.navy};

        :last-child {
          border-bottom: none;
        }
      }
    }
    .small-contain {
      width: 90%;
    }
  }
`;
const Contact = () => (
  <StyledContactPage>
    <StyledContactHeader>
      <h1>
        let's <span>chat</span>
      </h1>
      <p>I am excited to find out more about you!</p>
    </StyledContactHeader>
    <section>
      <div className="contain">
        <div className="small-contain">
          <form action="">
            <input type="text" placeholder="Full Name" />
            <input type="text" placeholder="Email" />
            <input type="text" placeholder="Phone" />
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="Message..."
            />
            <button type="submit">SEND</button>
          </form>
        </div>
      </div>
    </section>
    {/* add box shadow on days */}
    <section className="hours-section">
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
    </section>
  </StyledContactPage>
);

export default Contact;
