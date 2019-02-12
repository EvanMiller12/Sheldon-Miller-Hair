import Link from 'next/link';
import styled from 'styled-components';

const StyledHomePortfolio = styled.section`
  .contain {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: stretch;
    padding-top: 100px;
  }
  .content-left {
    width: 50%;
  }
  .content-right {
    width: 50%;

    li:first-child {
      margin-left: 5px;
    }
  }
  ul {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    margin: 0;
  }
  li {
    position: relative;
  }

  li:hover .info-contain {
    display: block;
  }
  li:last-child {
    text-align: center;
    /* background-color: ${props => props.theme.coral}; */
    a {
    display: inline-block;
    width: 60%;
    border: 1px solid ${props => props.theme.navy};
    padding: 5px 10px;
    margin-top: 8%;
    }
    :hover a {
      color: ${props => props.theme.coral}
    }
  }
  .info-contain {
    display: none;
    position: absolute;
    top:0;
    text-align: center;
    width: 100%;
  }
  .style-info {
    margin: 15px 15px 0;
    padding: 25px 0;
    background-color: #FFF;
    
    h3 {
      font-size: 2em;
    }
  }
  `;

const HomePortfolio = () => (
  <StyledHomePortfolio>
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
            <Link href="">
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
  </StyledHomePortfolio>
);

export default HomePortfolio;
