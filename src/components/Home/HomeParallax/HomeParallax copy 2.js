import './HomeParallax.css'
import ParallaxMousemove from 'react-parallax-mousemove'

const HomeParallax = () => {
  return  (
    <div className="paral-container">
<ParallaxMousemove containerStyle={{
              width: '100%',
              display: 'flex',
              justifyContent: 'center',
              height: '100%'
            }} fullHeight={true}>
         <ParallaxMousemove.Layer layerStyle={{
                position: 'absolute',
                width: '30%',
                bottom: '0',
                alignSelf: 'flex-end',
                paddingBottom: '70px',
              }}  
              config={{
                xFactor: 0.3,
                yFactor: 0,
                springSettings: {
                  stiffness: 50,
                  damping: 30
                }
              }}>
              <img className='circulo-grande' src='images/negroGrande.svg' />
              </ParallaxMousemove.Layer>
              <ParallaxMousemove.Layer
                  layerStyle={{
                position: 'absolute',
                marginLeft: '30px',
                width: '30%',
                alignSelf: 'flex-end'
              }}
              config={{
                xFactor: 0.3,
                yFactor: 0,
                springSettings: {
                  stiffness: 50,
                  damping: 30
                }
              }}
            >
        <img className='yo' src='images/yo.png' />
        </ParallaxMousemove.Layer>
        <ParallaxMousemove.Layer
              factorX={0.07}
              factorY={0.05}
              updateStyles={{
                position: 'relative',
                width:' 12%',
                top: '25%',
                left: '0'
              }}
              config={{
                xFactor: 0.3,
                yFactor: 0,
                springSettings: {
                  stiffness: 50,
                  damping: 30
                }
              }}
            ><img className='angular-logo' src='images/angular.svg' />
            </ParallaxMousemove.Layer>
        
        <ParallaxMousemove.Layer
              layerStyle={{
                position: 'relative',
                width: '20%',
                top: '30%',
                left: '25%'
              }}
              config={{
                xFactor: 0.3,
                yFactor: 0,
                springSettings: {
                  stiffness: 50,
                  damping: 30
                }
              }}
            ><img className='js-logo' src='images/js.svg' />
            </ParallaxMousemove.Layer>
        
        <ParallaxMousemove.Layer
              layerStyle={{
                position: 'relative',
                width: '14%',
                top: '-10%',
                left: '10%'
              }}
              config={{
                xFactor: 0.3,
                yFactor: 0,
                springSettings: {
                  stiffness: 50,
                  damping: 30
                }
              }}
            ><img className='react-logo' src='images/react.svg' />
            </ParallaxMousemove.Layer>
        
        <ParallaxMousemove.Layer
              layerStyle={{
                position: 'relative',
                width: '3%',
                top: '-25%',
                left: '5%'
              }}
              config={{
                xFactor: 0.3,
                yFactor: 0,
                springSettings: {
                  stiffness: 50,
                  damping: 30
                }
              }}
            > <img className='punto-negro' src='images/negro.svg' />
            </ParallaxMousemove.Layer>
       
        <ParallaxMousemove.Layer
              layerStyle={{
                position: 'relative',
                width: '1%',
                top: '15%',
                left: '10%'
              }}
              config={{
                xFactor: 0.3,
                yFactor: 0,
                springSettings: {
                  stiffness: 50,
                  damping: 30
                }
              }}
            ><img className='punto-verde' src='images/verde.svg' />
            </ParallaxMousemove.Layer>
  
        </ParallaxMousemove>
    </div>
    );
};

export default HomeParallax
