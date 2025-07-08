import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HomePage from './components/HomePage'
import NavBar from './components/NavBar'
import SignUP from './components/SignUP'
import Explore from './components/Explore'
import Create from './components/Create'
import Footer from './components/Footer'

function App() {

  const[userInfo,SetUserInfo] = useState({username:'',email:''})

  const handleUserRegistration = (username , email) =>{
    SetUserInfo({username, email})
  }

  return (
    <div className='app'>
      <NavBar />
         <div className="content">
          <HomePage username={userInfo.username} email={userInfo.email} />
          <SignUP onUserRegistration={handleUserRegistration} />
         </div>
         <Explore />
         <Create />
         <Footer />
    </div>
  )
}

export default App
