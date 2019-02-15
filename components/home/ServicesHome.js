import Link from "next/link";
import ServicesStyles from "../styled/home/ServiceStyles";

const ServicesHome = () => (
  <ServicesStyles>
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
          <Link href="/services">
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
  </ServicesStyles>
);

export default ServicesHome;
