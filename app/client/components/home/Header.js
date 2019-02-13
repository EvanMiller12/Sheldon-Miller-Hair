import Link from "next/link";
import styled from "styled-components";
import Router from "next/router";
import NProgress from "nprogress";

Router.onRouteChangeStart = () => {
  NProgress.start();
};

Router.onRouteChangeComplete = () => {
  NProgress.done();
};

Router.onRouteChangeError = () => {
  NProgress.done();
};

const HomeHeader = styled.header`
  .header-img {
    width: 100%;
    height: 500px;
    overflow: hidden;
  }
  .header-img img {
    max-width: 100%;
    position: relative;
    top: -140px;
    opacity: 0.8;
  }
  ul {
    list-style: none;
    padding-left: 0;
  }
  li {
    display: inline-block;
    padding-right: 5px;

    :last-child {
      padding-right: 0;
    }

    a {
      font-size: 3em;
      color: ${props => props.theme.coral};
      text-decoration: underline;
    }
  }

  .contain {
    justify-content: space-around;
    padding-top: 2rem;
  }

  .content-left {
    width: 40%;
    text-align: center;
  }
  .content-right {
    width: 40%;
  }

  @media (max-width: 768px) {
    .header-img {
      height: 375px;
    }

    .contain {
      li {
        a {
          font-size: 1.8em;
        }
      }
    }
  }

  @media (max-width: 414px) {
    .header-img {
      height: 300px;
      overflow: visible;

      img {
        top: 20px;
      }
    }
  }
`;

const Header = () => (
  <HomeHeader>
    <div className="header-img">
      <img src="../../static/headerimg.jpg" alt="" />
    </div>
    <div className="contain">
      <div className="content-left">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi vero
          rem aliquid tenetur ipsa eveniet quia.
        </p>
      </div>
      <div className="content-right">
        <ul>
          <li>
            <Link href="">
              <a>Beautiful Styles,</a>
            </Link>
          </li>
          <li>
            <Link href="">
              <a>Intuitive Color,</a>
            </Link>
          </li>
          <li>
            <Link href="">
              <a>Extensions,</a>
            </Link>
          </li>
          <li>
            <Link href="">
              <a>Special Event Styling</a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </HomeHeader>
);

export default Header;
