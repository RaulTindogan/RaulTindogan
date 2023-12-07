import React from 'react'

function About() {
  return (
    <section className="main__about" id="about">
      <h2>ABOUT ME</h2>
      <div className="about__container">
        <div className="about__question-container">
          <div className="about__image-holder">
            <img className="about__image" src="assets/persons/about-me.png" alt="Mystery Man" />
            <p className="question-mark">?</p>
          </div> 
        </div>
        <div className="about__information-container">
          <p>I am a passionate front-end web developer who specializes in transforming web designs into responsive and user-friendly websites.</p>
          <p>
            I invite you to explore my portfolio, where you'll find a showcase of my past projects that demonstrate my expertise in 
            web development. If you're looking for a passionate and skilled web developer who can transform your ideas into captivating 
            digital experiences, I would be thrilled to collaborate with you.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About