import React from 'react';
import './styles.css';

const Welcome = ({loginClicked}) => {
  return (
    <div className='welcomeContainer'>
        <h1>Welcome and thanks for visiting our site</h1>
        <button onClick={loginClicked}>Login</button>
    </div>
  )
}

export default Welcome