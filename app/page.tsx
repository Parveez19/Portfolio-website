import React from 'react'
import Navbar from './components/navbar'
import Home from './components/home'
import ProjectsPage from './projects/page'
import About from './about/page'

const page = () => {
  return (
    <div>
        <Navbar/>
        <Home/>
        <About/>
        <ProjectsPage/>
    </div>
  )
}

export default page