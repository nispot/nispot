import HomeParallax from './HomeParallax/HomeParallax';
import './Home.scss'
import Info from './Info/Info';

export const Home = () => {
  return (
    <div className='home-container'>
        <Info />
        <HomeParallax className='parallax-container'/>
        <img className="scroll-down" src="images/scroll-down.gif" alt='scroll down' />
    </div>
  );
};
