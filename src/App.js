import React from "react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/navbar/";
import Layout from "./components/Layout";
import Routes from "./Routes";
import Footer from "./components/footer";
import Reset from "./Reset";
// import Wassap from "./wassap.png";

function App() {
  // const refS = React.createRef();
  // const refC = React.createRef();
  // const refA = React.createRef();
  // const handleClickC = () => {
  //   console.log("boo");
  //   if (refC.current) {
  //     console.log("all");
  //     refC.current.scrollIntoView({
  //       behavior: "smooth",
  //       block: "nearest",
  //     });
  //   }
  // };
  // const handleClickS = () => {
  //   console.log("boo");
  //   if (refS.current) {
  //     console.log("all");
  //     refS.current.scrollIntoView({
  //       behavior: "smooth",
  //       block: "nearest",
  //     });
  //   }
  // };
  // const handleClickA = () => {
  //   console.log("boo");
  //   if (refA.current) {
  //     console.log("all");
  //     refA.current.scrollIntoView({
  //       behavior: "smooth",
  //       block: "nearest",
  //     });
  //   }
  // };
  return (
    <BrowserRouter>
      <div className="App">
        <Reset>
          <Navbar
          /* handleClickC={handleClickC}
            handleClickA={handleClickA}
            handleClickS={handleClickS} */
          />
          <Layout>
            <Routes
            /* refS={refS} refC={refC} refA={refA} */
            />
            <Footer />
          </Layout>
        </Reset>
      </div>
    </BrowserRouter>
  );
}

export default App;

/* <a href="https://wa.me/2348027924281" className="wassap-link">
              <img className="wassap-image" src={Wassap} />
            </a> */
