import React from 'react'

const LoginScreen = ({username,password,setUsername,setPassword, handleClick,errorMessage}) => {
    const handleSubmit =(e)=>{
        e.preventDefault();
    }
  return (
    <div className='loginContainer'>
        <h1>Login Form</h1>
        <form onSubmit={handleSubmit}>
            <input value={username} onChange={e=>setUsername(e.target.value)} placeholder="Enter unsername"/>
            <input value={password} onChange={e=>setPassword(e.target.value)} placeholder="Enter Password"/>
            <button type='submit' onClick={handleClick}>Login</button>
        </form>
        {errorMessage && <p>{errorMessage}</p>}
    </div>
  )
}

export default LoginScreen