import React from 'react'
import Hero_Section from './Hero_Section'
import About from './About'
import Project from './Project'

function Main_Section() {
  return (
    <main className='main container'>
       <Hero_Section /> 
       <About />
       <Project />
    </main>
  )
}

export default Main_Section