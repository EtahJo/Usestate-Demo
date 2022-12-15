import React from 'react';
import './styles.css';

const Navbar = ({onClickOne, onClickTwo,onClickThree,classNameOne,classNameTwo,classNameThree}) => {
  return (
    <div className='navbarContainer'>
        <nav>
            <ul>
                <li><button onClick={onClickOne} className={classNameOne}>Home</button></li>
                <li><button onClick={onClickTwo} className={classNameTwo}>Login</button></li>
                <li><button onClick={onClickThree} className={classNameThree}>Welcome</button></li>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar