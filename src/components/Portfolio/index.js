import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'


const Portfolio = () => { 
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
      return setTimeout(() => {
        setLetterClass('text-animate-hover')
      }, 3000)
    }, [])
  
    useEffect(() => {
        return setTimeout(() => {
          setLetterClass('text-animate-hover')
        }, 3000)
      }, [])
    
      return (
        <>
          <div className="container portfolio-page">
            <div className="text-zone">
              <h1>
                <AnimatedLetters
                  letterClass={letterClass}
                  strArray={['P', 'r', 'o', 'c', 'e', 's', 's']}
                  idx={14}
                />
              </h1>
              <p>
                1.Project 1 involves the UX project we made in class I named my App DayDream, the overview of the application was a UI to replace the 'homepage' page that
                many applications use. The goal was to make it easier to be productive, to achieve this I asked people that suffer from Autism or ADHD to describe problems they have relating
                to 'productive' apps(Outlook, Google Calenders, D2l). I collected a focus group and interviewed each of them to get a wide range of opinions, the main issue I found wasn't a dislike
                of similar apps but instead that they could not remember to use said apps because they weren't 'in your face enough'. I then asked about the likes and dislikes of search engine, and OS
                homepages to make the UI enjoyable to use. It ended with 5 major points:{"\n"}
                1.Make being productive impossible to miss when opening a homescreen i.e putting a calender/reminders interface dead center.{"\n"}
                2.Create a way for people to make it their own, i.e modular boxes with seperate widgets, background modification.{"\n"}
                3.Put something in the background constantly, this would allow for better attention retention.{"\n"}
                4.Less clicks, the user prefers to only go as far as the minimal effort to open the app will allow.{"\n"}
                5.The inability to manage a calender/schedule has less to do with percieved effort and more to do with ease of access.{"\n"}
                I then created my buisness model revolving around licensing to an API to allow developers to put their apps into said homepage UI. 
                And finally designed it and tested it with the same group.the feedback was admittedly minimal however, it was percieved well with 5/5 participants 
                saying that they would without hesitation pick this UI model over major competitors. the biggest ask was actually to add a slider button to allow google searches and app acces
                to be opened in a new window to keep the homepage open for use.
              </p>
              <p align="LEFT">
                2. Project 2 involved my work at my internship at Ascend Analytics we develop cloud network/interface for renewable energy companies to plan where they would like to set up solar farms.
                Personally I work on an internal IT tool that allows people at the company to put in IT-Requests here is what my co-workers and I did.
                1.Gathered a record of common complaints.{"\n"}
                2.Tried desperately to get people to read the manual of how Microsoft Dynamics 365 works.{"\n"}
                3.When that didn't work we put together a website that would allow users to quickly enter in the problem, would send examples if the keywords matched previous questions similar to FAQ.{"\n"}
                4. If it wasn't in said FAQ would prompt the user with some questions relating to the problem, then send it off to a massive case list we had in our D365 CRM. {"\n"}
                5.This would A. mean we got rid of 'easy' problems that could be fixed by the User. B. Consolidated problems based on department and topic allowing us to have an easier time {"\n"}
                organizing all of our individual assignments.

              </p>
            </div>
          </div>
          <Loader type="pacman" />
        </>
      )
    }
export default Portfolio;