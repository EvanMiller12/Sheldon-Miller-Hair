import Link from "next/link";
import styled from "styled-components";

// scope styles

const StyledServices = styled.section`

  .service-section {
    display: flex;
    /* flex-direction:column; */
    height: 90vh;
  }

  .service-section > :first-child {
    background-color: ${props => props.theme.coral};
  }

  .service-section > :nth-child(2) {
    background-color: ${props => props.theme.lightGrey};
  }

  .service-section > :last-child {
    background-color: ${props => props.theme.navy};
  }

  .service-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 50%;
    color: #fff;
    padding: 5px;
    /* background-color: ${props => props.theme.navy}; */

    h3 {
      margin: 0;
    }

    ul {
      font-size: 1.5em;
    }

    a {
      color: #fff;
      border: 1px solid;
      padding: 0 10px;
      margin-top: 20px;
    }
  }
  .service-img {
    height: 50%;
    img {
      height: 100%;
      width: 100%;
    }
  }
   @media(max-width: 1024px) {
     .service-section {
       height: 50vh;
     }
   }
   @media(max-width: 768px) {
    .service-content a {
      margin-top: 10px;
    }
   }
   @media(max-width: 696px) {
     .service-section {
       display: block;
       height: auto;
     }
     .service-content {
       padding: 4em 0;
     }
     .service-img {
       display: none;
     }
   }
`;
const ServicesHome = () => (
  <StyledServices>
    <div className="service-section">
      <div className="service-wrapper">
        <div className="service-content">
          <h3>Color</h3>
          <ul>
            <li>
              Creative cut- <span>$60 ^</span>
            </li>
            <li>
              Partial cut- <span>$40 ^</span>
            </li>
            <li>
              Extensions- <span>priced per strand</span>
            </li>
          </ul>
          <Link href="">
            <a>SEE MORE</a>
          </Link>
        </div>
        <div className="service-img">
          <img src="../../static/hair1.jpg" alt="" />
        </div>
      </div>
      <div className="service-wrapper">
        <div className="service-img">
          <img src="../../static/hair1.jpg" alt="" />
        </div>
        <div className="service-content">
          <h3>Extensions</h3>
          <ul>
            <li>
              Fashion cut with SHampoo and blow-dry - <span>$65 ^</span>
            </li>
            <li>
              Shampoo with cut and blow-dry - <span>$50 ^</span>
            </li>
            <li>
              Cleaning up neckline / sideburns- <span>$20 ^</span>
            </li>
          </ul>
          <Link href="">
            <a>SEE MORE</a>
          </Link>
        </div>
      </div>
      <div className="service-wrapper">
        <div className="service-content">
          <h3>cuts</h3>
          <ul>
            <li>
              Boy's cuts 12 years and less- <span>$30.00</span>
            </li>
            <li>
              Girl's cuts 12 years and less- <span>$45.00</span>
            </li>
            <li>
              Adding color- <span>+ $15.00 ^</span>
            </li>
          </ul>
          <Link href="">
            <a>SEE MORE</a>
          </Link>
        </div>
        <div className="service-img">
          <img src="../../static/hair1.jpg" alt="" />
        </div>
      </div>
    </div>
  </StyledServices>
);

export default ServicesHome;
