import Link from 'next/link';
import styled from 'styled-components';

// scope styles

const StyledServices = styled.section`
  padding: 50px 0;

  .service-section {
    display: flex;
    height: 100vh;
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
    /* width: 100%; */

    img {
      height: 100%;
      width: 100%;
    }
  }
`;
const ServicesHome = () => (
  <StyledServices>
    <div className="service-section">
      <div className="service-wrapper">
        <div className="service-content">
          <h3>WOMEN</h3>
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
          <h3>MEN</h3>
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
          <h3>KIDS &amp; TEENAGERS</h3>
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
