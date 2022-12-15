import React from 'react'

const HomeScreen = ({img,name,age,address, logoutClicked}) => {
  return (
    <div className='homeContainer'>
        <div>
            <img src={img} alt="User's picture"/>
            <h3>Hello, {name}</h3>
        </div>
        <div>
            <span>
                <strong>Age:</strong>
                <small>{age}</small>
            </span>
            <span>
                <strong>Address:</strong>
                <small>{address}</small>
            </span>
            <button onClick={logoutClicked}>Logout</button>
        </div>
       
    </div>
  )
}

export default HomeScreen