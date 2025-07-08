import React from 'react'
import NavBar from './NavBar'
import SignUP from './SignUP'
import '../styles/HomePage.css'

export default function HomePage({username, email}) {
    return (
    <div className="main-content">
      <h1>Build <strong>social profiles</strong> and gain <br /> revenue profits</h1>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed, tempore iusto in minima facere dolorem!</p>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed, tempore iusto in minima facere dolorem!</p>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed, tempore iusto in minima facere dolorem!</p>
      {
        username && email && (
            <div className="user-info">
                <h2>Welcome, {username}!</h2>
                <p>Email: {email}</p>
            </div>
        )
      }
    </div>
  );
}
