import './Header.scss';
import { slide as Menu } from 'react-burger-menu'
import { Nav } from './Nav/Nav';

export const Header = () => {
  return (
    <>
    <header className='header'>
        <div className='logo'>
          <span className='nombre'>Nispot</span>.dev
        </div>
        <div className="desktop-menu">
          <Nav />
        </div>
        <div className="desktop-mobile">
        <Menu right={true}>
          <Nav />
        </Menu>
      </div>
    </header>
    </>
    );
};
