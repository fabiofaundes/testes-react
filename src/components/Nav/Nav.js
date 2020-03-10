import React from 'react';
import './Nav.css';
import { Link } from 'react-router-dom';

class Nav extends React.Component {
  render() {
    return(
      <>
        <nav className='nav'>                    
          <h1 className='logo'>Cozinha Mania</h1>
          <div className='abas'>
            <Link className='item' to='/home'><span>Home</span></Link>
            <Link className='item' to='/ingredientes'><span>Ingredientes</span></Link>
            <Link className='item' to='/contato'><span>Contato</span></Link>
          </div>
        </nav>
      </>
    );
  }
}

export default Nav;