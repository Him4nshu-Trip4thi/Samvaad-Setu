import React from 'react'
import "../App.css"
import { Link } from 'react-router-dom';

export default function landing() {
  return (
    
    <div className='landingPageContainer'>
        <nav>
            <div className='navHeader'>
                <h2>Samvaad Setu</h2>
            </div>
            <div className='navList'>
                <p>Join as Guest</p>
                <p>Register</p>
                <div role='button'>
                    <p>Login</p>
                </div>
            </div>
        </nav>

        <div className="landingMainContainer">
            <div>
                <h1><span style={{color: 'orange'}}> Setu </span>that connects more than just  <span style={{color: 'orange'}}>
                     calls </span></h1>
                
                <p>Because Some Words Can't Wait.</p>
                <div role='button'>
                    <Link to="/auth">Get Started</Link>
                </div>
            </div>
            <div>
                <img src="/mobile.png" alt="mobileImg" />
            </div>
        </div>

    </div>
  )
}
