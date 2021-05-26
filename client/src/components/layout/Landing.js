import React from 'react'

export const Landing = () => {
    return (
        <section className="landing">
      <div className="dark-overlay">
        <div className="landing-inner">
          <h1 className="x-large"> Portfolio Project</h1>
          <p className="lead">
            {/* this needs to actually display the new lines  */}
            Search for your favorite Movies and Games, share them
            with your friends, leave a review, or simply check out
            information about your favorite characters !
          </p>
          <div className="buttons">
            <a href="register.html" className="btn btn-primary">Sign Up</a>
            <a href="login.html" className="btn btn-light">Login</a>
          </div>
        </div>
      </div>
    </section>
    )
}

export default Landing;
