import "./HomeParallax.scss";
import {
  MouseParallaxChild,
  MouseParallaxContainer,
} from "react-parallax-mouse";

const HomeParallax = () => {
  return (
    <div className="paral-container">

      <MouseParallaxContainer
        containerStyles={{
          width: "100%",
          maxWidth: "100%",
          display: "flex",
          justifyContent: "center",
        }}
        className="yo-container"
        useWindowMouseEvents
        resetOnLeave
      >
        <MouseParallaxChild
          factorX={0.02}
          factorY={0.03}
          updateStyles={{
            position: "absolute",
            bottom: "0",
            alignSelf: "flex-end",
            paddingBottom: "35px",
            justifyContent: "center",
          }}
        >
          <img className="circulo-grande" src="images/negroGrande.svg" alt='' />
        </MouseParallaxChild>

        <MouseParallaxChild
          factorX={0.04}
          factorY={0.05}
          updateStyles={{
            position: "absolute",
            marginLeft: "30px",
            alignSelf: "flex-end",
            paddingLeft: "5%",
            justifyContent: "center",
          }}
          className="imagen-yo"
        >
          <img className="yo animate__animated animate__backInUp" src="images/yo.png" alt='me' />
        </MouseParallaxChild>

        <MouseParallaxChild
          factorX={0.07}
          factorY={0.06}
          updateStyles={{
            position: "relative",
            width: " 12%",
            top: "60%",
            left: "-165px",
          }}
        >
          <img className="angular-logo animate__animated animate__pulse animate__infinite" src="images/angular.svg" alt='angular' />
        </MouseParallaxChild>

        <MouseParallaxChild
          factorX={0.07}
          factorY={0.06}
          updateStyles={{
            position: "relative",
            width: "20%",
            top: "63%",
            left: "35%",
          }}
        >
          <img className="js-logo animate__animated animate__pulse animate__infinite" src="images/js.svg" alt='javascript'/>
        </MouseParallaxChild>

        <MouseParallaxChild
          factorX={0.09}
          factorY={0.09}
          updateStyles={{
            position: "relative",
            width: "14%",
            top: "25%",
            left: "20%",
          }}
        >
          <img className="react-logo" src="images/react.svg" alt='reactjs' />
        </MouseParallaxChild>

        <MouseParallaxChild
          factorX={0.05}
          factorY={0.04}
          updateStyles={{
            position: "relative",
            width: "3%",
            top: "15%",
            left: "15%",
          }}
        >
          <img className="punto-negro" src="images/negro.svg" alt='' />
        </MouseParallaxChild>

        <MouseParallaxChild
          factorX={0.08}
          factorY={0.08}
          updateStyles={{
            position: "relative",
            width: "1%",
            top: "55%",
            left: "18%",
          }}
        >
          <img className="punto-verde" src="images/verde.svg" alt='' />
        </MouseParallaxChild>

      </MouseParallaxContainer>
    </div>
  );
};

export default HomeParallax;
