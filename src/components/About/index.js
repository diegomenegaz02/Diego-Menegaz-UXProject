import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import LogoA from '../../assets/images/DLogo.png'
const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            I'm an ambbitious person, however I don't have really any experience
            creating UIs in any situation, I am a very practical person and so in
            light of this I created my first whole website for this assignment.
            It is also my first time learning react so be gentle please.
          </p>
          <p align="LEFT">
            I have always worked in backend creating SASS tools for the company I intern
            at doing IT/Development at a company called Ascend Analytics, the tool we build or the one I focus on is called
            BatterySIMM, while legally I cannot provide images essentially we provide
            a map for optimal spots to create and deploy solar fields in order to generate
            as much electricity as possible for as little cost as possible.
          </p>
          <p>
            I specialize in network operations and fixing issues relating to accounts
            in said Product, we have a large array of clients using our services,
            again none of which can be legally mentioned in this context. In the 
            spinning box is the logo of my company.
          </p>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
            <img src={LogoA} alt="Logo" />
            </div>
            <div className="face2">
            <img src={LogoA} alt="Logo" />
            </div>
            <div className="face3">
            <img src={LogoA} alt="Logo" />
            </div>
            <div className="face4">
            <img src={LogoA} alt="Logo" />
            </div>
            <div className="face5">
            <img src={LogoA} alt="Logo" />
            </div>
            <div className="face6">
            <img src={LogoA} alt="Logo" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About