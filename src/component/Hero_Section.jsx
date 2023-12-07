import React from 'react'

function Hero_Section() {
  return (
    <section className="main__hero" id="home">
      <div className="main__left-container">
        <div className="left-content__container">
          <h1 className="main__hero--heading">I am a <span className="job">FRONT-END WEB DEVELOPER</span></h1>
          <p className="main__hero--paragraph">I am a passionate Front-end Web Developer who specializes in transforming web designs into responsive and user-friendly websites.</p>
          <a href="#project" className="main__hero--button">Check My Projects</a>
        </div>
      </div>
      <div className="main__right-container">
          <img className="my-image" src="assets/persons/dp.png" alt="Raul Tindogan" />
      </div>
    </section>
  )
}

export default Hero_Section