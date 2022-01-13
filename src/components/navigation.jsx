import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import Logo from "./logo.svg";

export const Navigation = (props) => {
  const { pathname } = useLocation();
  console.log(pathname === "/");
  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            {" "}
            <span className="sr-only">Toggle navigation</span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
          </button>
          <Link
            className="navbar-brand page-scroll flex flex-row flex-1 gap-4"
            to="/"
          >
            <img
              src={Logo}
              className="logoe-image desktop"
              alt="Omisej Nigeria Limited"
            />
            {"   "}
            Omisej Nigeria Limited
          </Link>{" "}
        </div>

        {pathname === "/" ? (
          <div
            className="collapse navbar-collapse"
            id="bs-example-navbar-collapse-1"
          >
            <ul className="nav navbar-nav navbar-right">
              <li>
                <a href="#about" className="page-scroll">
                  About
                </a>
              </li>
              <li>
                <a href="#services" className="page-scroll">
                  Services
                </a>
              </li>
              <li>
                <a href="#portfolio" className="page-scroll">
                  Gallery
                </a>
              </li>

              <li>
                <a href="#team" className="page-scroll">
                  Our Clients
                </a>
              </li>
              <li>
                <a href="#contact" className="page-scroll">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        ) : (
          <div
            className="collapse navbar-collapse"
            id="bs-example-navbar-collapse-1"
          >
            <div className="nav navbar-nav navbar-right">
              <Link to="/" className="page-scroll homie">
                HOME
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
