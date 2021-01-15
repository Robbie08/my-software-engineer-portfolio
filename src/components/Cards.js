import React from 'react';
import CardItem  from './CardItem';
import './Cards.css';


function Cards(){
    return(
        <div className='cards'>
            <div className='cards__header'>
                <h1>My Projects</h1>
            </div>
            
            <div className='cards__wrapper'>
                <ul className='cards__items'>
                    <CardItem 
                    src='images/project-github-logo.jpg'
                    title='Vehicle Manager'
                    text='This Android Application incorporates CRUD functionallity on a Vehicle Management System.
                    Overall, it was a great experience because it was fun, and I learned new things throughout the process. 
                    My future plans are to modify the list by displaying the object in a card view where the elements 
                    are nice and structured. Feel free to download the application and interact with it. 
                    This application uses a real-time database, so you will always have the latest vehicles on your phone.'
                    label='Project'
                    path='/services' />

                    <CardItem 
                    src='images/project-aiclub.png'
                    title='SDSU A.I. Club-Project Lead'
                    text="I'm a project lead at the SDSU Artificial Intelligence Club.
                    I created and led a group of students by building a machine learning 
                    project. I held weekly meetings (through zoom) to discuss and 
                    troubleshoot any issues that the project or students had throughout 
                    the week. We also implemented Agile throughout the project to better 
                    improve the productivity and workflow of the project. My team and I 
                    presented the project to the A.I. Club at the end of the semester."
                    label='Club Affilication'
                    path='/services' />

                    <CardItem 
                    src='images/project-codeday-hackathon.jpg'
                    title='Hackathon'
                    text='Participated in the Codeday Hackathon 
                    and won the "Best Mobile Application" award 
                    out of 60 teams by creating a social motivation 
                    Android Application. My team and I engineered a mobile 
                    CRUD application using Java, Firebase, XML, and Agile. 
                    I was responsible for integrating the application with 
                    a user authentication system by using Firebase API and 
                    Java. I also improved the efficiency of the user-post 
                    insertion algorithm from O(N) to O(1) by 
                    implementing a Stack.'
                    label='Hackathon'
                    path='/services' />
                </ul>
                <ul className='cards__items'>
                    <CardItem 
                    src='images/project-random-nums.PNG'
                    title='Random Numbers'
                    text="This React application uses the Numbers API to 
                    generate random facts about numbers. I created this 
                    application to practice consuming API's with React.js.

                    I learned how to correctly make requests to the API 
                    as well as using syntax like async/await to handle 
                    promisses.
                    
                    I also hosted the Random Numbers Facts website onto 
                    the heroku server. Feel free to check it out and play 
                    around with the website I created."
                    label='Project'
                    path='/services' />

                    <CardItem 
                    src='images/project-parksmart.png'
                    title='Park Smart'
                    text='A brainchild of mine, this 
                    is an Android parking application 
                    for university students and faculty 
                    to find available parking spaces in 
                    a campus lot or parking structure. 
                    This application incorporates Firebase 
                    database for user and parking lot information
                     and also incorporates the Google Maps API.'
                    label='Project'
                    path='/services' />

                </ul>
            </div>
        </div>
    )
}

export default Cards;