import Link from "next/link";
import PortfolioStyles from "../styled/home/PortfolioStyles";

const HomePortfolio = () => (
  <PortfolioStyles>
    <div className="contain">
      <div className="content-left">
        <ul>
          <li>
            <div className="info-contain">
              <div className="style-info">
                <h3>Color and Extensions</h3>
              </div>
            </div>
            <img src="../../static/hair1.jpg" alt="" />
          </li>
          <li>
            <div className="info-contain">
              <div className="style-info">
                <h3>Color and Extensions</h3>
              </div>
            </div>
            <img src="../../static/hair2.jpg" alt="" />
          </li>
          <li>
            <Link href="/mywork">
              <a>VIEW MORE</a>
            </Link>
          </li>
        </ul>
      </div>
      <div className="content-right">
        <ul>
          <li>
            <div className="info-contain">
              <div className="style-info">
                <h3>Color and Extensions</h3>
              </div>
            </div>
            <img src="../../static/hair3.jpg" alt="" />
          </li>
        </ul>
      </div>
    </div>
  </PortfolioStyles>
);

export default HomePortfolio;
