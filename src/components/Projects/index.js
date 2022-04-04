import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

const Projects = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      <div className="container projects-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              strArray={['P', 'r', 'o', 'j', 'e', 'c', 't', 's']}
              letterClass={letterClass}
              idx={15}
            />
          </h1>
          <p className="project">
            <h2 className="project-title">RESTAURANT REVIEWS</h2>
            <p className="project-desc">
              A full stack web application that allows users to add reviews to
              restaurants in New York City, It uses the ReactJS framework for
              the frontend, Node.js and Express.js for the backend and MongoDB
              Atlas for the database. Github repository link: <br />
              <a href="https://github.com/Nero2005/Restaurant-Reviews">
                https://github.com/Nero2005/Restaurant-Reviews
              </a>
            </p>
          </p>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Projects
