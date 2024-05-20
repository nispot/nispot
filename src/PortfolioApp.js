import ReactFullpage from "@fullpage/react-fullpage";
import "animate.css";
import "./PortfolioApp.scss";
import { Home } from "./components/Home/Home";
import { Header } from "./components/Header/Header";
import Skills from "./components/Skills/Skills";
import { About } from "./components/About/About";
import Experience from "./components/Experience/Experience";
import Portfolio from "./components/Portfolio/Portfolio";
import Footer from "./components/Footer/Footer";

const Fullpage = () => (
  <ReactFullpage
    scrollOverflow={true}
    scrollingSpeed={1000}
    normalScrollElements="#headernav"
    responsiveWidth="1008800"
    anchors={["home", "about", "skills", "experience", "works", "footer"]}
    menu="#myMenu"
    render={({ state, fullpageApi }) => {
      console.log(state);
      //fullpage_api.setResponsive(true);

      return (
        <ReactFullpage.Wrapper>
          <div id="inicio" className="section">
            <Home />
          </div>

          <div id="sobre" className="section space">
            <About />
          </div>

          <div id="habilidades" className="section space">
            <Skills />
          </div>

          <div id="experiencia" className="section space">
            <Experience />
          </div>

          <div id="trabajos" className="section section3">
            <Portfolio fullpageApi={fullpageApi} />
          </div>

          <div
            id="pie"
            className="section global-footer-container fp-auto-height"
          >
            <Footer />
          </div>
        </ReactFullpage.Wrapper>
      );
    }}
  />
);

export const PortfolioApp = () => {
  return (
    <>
      <div id="headernav" className="header-container">
        <Header />
      </div>
      <Fullpage />
    </>
  );
};

export default PortfolioApp;
