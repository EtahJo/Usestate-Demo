import React, {useState} from 'react';
import './App.css';
import HomeScreen from './components/HomeScreen';
import LoginScreen from './components/LoginScreen';
import Welcome from './components/Welcome';
import Navbar from './components/Navbar';
import "./components/styles.css";
import data from './data/data';


function App() {
  const[isLoggedIn,setIsloggedIn]=useState(false);
  const[welcome,setWelcome]=useState(true);
  const[home,setHome]=useState(false);
  const[userName,setUsername]=useState("");
  const[password,setPassword]=useState("");
  const[errorMessage,setErrorMessage]=useState("");
  const[name,setName]=useState("");
  const[img,setImg]=useState("");
  const[age,setAge]=useState("");
  const[address,setAddress]=useState("");
  const[presentUser,setPresentUser]=useState([]);
  
  const loginClicked=()=>{
    setIsloggedIn(true);
    setHome(false);
    setWelcome(false);
  
  }

const logoutClicked=()=>{
  setUsername("");
  setPassword("");
  setPresentUser([])
  // setIsloggedIn(true)
  // setHome(false);
  // setWelcome(false)
  onClickTwo();

}
  const onClickOne=()=>{
    if(presentUser.length===0){
      alert("please login first")
    }else{
      setHome(true)
      setWelcome(false)
      setIsloggedIn(false)
    }
   
    
  }
  const onClickTwo=()=>{
    setIsloggedIn(true)
    setHome(false);
    setWelcome(false)
  }
  const onClickThree=()=>{
    setWelcome(true);
    setHome(false);
    setIsloggedIn(false)
  }
  const handleClick=()=>{
    /// check for right credentials
 const user = data.find((item)=> item.userName === userName);
 if(user){
  if(user.password === password){
    setHome(true)
    setIsloggedIn(false)
    setUsername("");
    setPassword("");
    setAddress(user.address);
    setAge(user.age);
    setImg(user.img);
    setName(user.userName);
    setPresentUser([user])
    setErrorMessage("")

   }else{
    setErrorMessage("Provide correct credentials")
   }
 }else{
  setErrorMessage("Provide correct credentials")
 }

    /// set home to true
  }

  return (
    <div className="App">
   <Navbar
   onClickOne={onClickOne}
   onClickTwo={onClickTwo}
   onClickThree={onClickThree}
   classNameOne={home ? "active":''}
   classNameTwo={isLoggedIn ?"active":''}
   classNameThree={welcome ?"active":""}
   />
      {home&&<HomeScreen
      img={img}
      name={name}
      age={age}
      address={address}
      logoutClicked={logoutClicked}
      />}
      {welcome&& <Welcome
      loginClicked={loginClicked}

      />}
      {isLoggedIn && <LoginScreen
      username={userName}
      setUsername={setUsername}
      password={password}
      setPassword={setPassword}
      handleClick={handleClick}
      errorMessage={errorMessage}
      />}
    </div>
  );
}

export default App;
