import Link from "next/link";
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

import HomeHeader from "../styled/home/HeaderStyles";

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
