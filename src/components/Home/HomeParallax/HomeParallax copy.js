import './HomeParallax.css'
import {
  MouseParallaxChild,
  MouseParallaxContainer
} from "react-parallax-mouse";

const HomeParallax = () => {
  return  (
    <div className="paral-container">
                <MouseParallaxContainer
            className="parallax"
            containerStyles={{
              width: '100%',
              display: 'flex',
              justifyContent: 'center',
              height: '100%'
            }}
            resetOnLeave
          >
                  <MouseParallaxChild
              factorX={0.05}
              factorY={0.05}
              updateStyles={{
                position: 'absolute',
                width: '30%',
                bottom: '0',
                alignSelf: 'flex-end',
                paddingBottom: '70px',
/*                 filter: "invert(1)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "auto",
                height: "100%" */
              }}
            >
              <img className='circulo-grande' src='images/negroGrande.svg' />
              </MouseParallaxChild>
              <MouseParallaxChild
              factorX={0.07}
              factorY={0.05}
              updateStyles={{
                position: 'absolute',
                marginLeft: '30px',
                width: '30%',
                alignSelf: 'flex-end'
/*                 display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "auto",
                height: "100%" */
              }}
            >
        <img className='yo' src='images/yo.png' />
        </MouseParallaxChild>
        <MouseParallaxChild
              factorX={0.07}
              factorY={0.05}
              updateStyles={{
                position: 'relative',
                width:' 12%',
                top: '25%',
                left: '0'


/*                 display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "auto",
                height: "100%" */
              }}
            ><img className='angular-logo' src='images/angular.svg' /></MouseParallaxChild>
        
        <MouseParallaxChild
              factorX={0.07}
              factorY={0.05}
              updateStyles={{
                position: 'relative',
                width: '20%',
                top: '30%',
                left: '25%'
/*                 display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "auto",
                height: "100%" */
              }}
            ><img className='js-logo' src='images/js.svg' /></MouseParallaxChild>
        
        <MouseParallaxChild
              factorX={0.07}
              factorY={0.05}
              updateStyles={{
                position: 'relative',
                width: '14%',
                top: '-10%',
                left: '10%'
/*                 display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "auto",
                height: "100%" */
              }}
            ><img className='react-logo' src='images/react.svg' /></MouseParallaxChild>
        
        <MouseParallaxChild
              factorX={0.07}
              factorY={0.05}
              updateStyles={{
                position: 'relative',
                width: '3%',
                top: '-25%',
                left: '5%'
/*                 display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "auto",
                height: "100%" */
              }}
            > <img className='punto-negro' src='images/negro.svg' /></MouseParallaxChild>
       
        <MouseParallaxChild
              factorX={0.07}
              factorY={0.05}
              updateStyles={{
                position: 'relative',
                width: '1%',
                top: '15%',
                left: '10%'
/*                 display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "auto",
                height: "100%" */
              }}
            ><img className='punto-verde' src='images/verde.svg' /></MouseParallaxChild>
        
        
        </MouseParallaxContainer>
    </div>
    );
};

export default HomeParallax
