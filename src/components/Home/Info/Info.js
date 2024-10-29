import {
  MouseParallaxChild,
  MouseParallaxContainer,
} from "react-parallax-mouse";
import "./Info.scss";

const Info = () => {
  return (
    <MouseParallaxContainer
      containerStyles={{
        flex: "4",
        backgroundColor: "transparent",
        display: "flex",
        flexDirection: "column",
        flexWrap: "wrap",
        alignItems: "flex-start",
        justifyContent: "center",
      }}
      className="testingdata"
      useWindowMouseEvents
      resetOnLeave
    >
      <MouseParallaxChild factorX={0.05} factorY={0.05}>
{/*         <button
          className="btn btn-green animate__animated animate__slideInLeft"
        >
          JS FULLSTACK DEVELOPER
        </button>
        <br />
        <br /> */}
        <button
          href="#"
          className="btn btn-green animate__animated animate__slideInLeft"
        > 
        FRONTEND SPECIALIST DEVELOPER
        </button>
        <h1 className="title-caption animate__animated animate__slideInLeft animate__delay-1s">
          “The only way to do great work is to love what you do.”
        </h1>
        <p className="text animate__animated animate__slideInLeft animate__delay-2s">
          Steve Jobs.
          <br />
          1955-2011.
        </p>
      </MouseParallaxChild>
    </MouseParallaxContainer>
  );
};

export default Info;
