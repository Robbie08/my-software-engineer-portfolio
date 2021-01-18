import React from 'react';
import CardItem  from './CardItem';
import './Cards.css';


function Cards(){
    return(
        <div className='cards' id='my_projects'>
            <div className='cards__header'>
                <h1>My Projects</h1>
            </div>
            
            <div className='cards__wrapper'>
                <ul className='cards__items'>
                    <CardItem 
                    src='images/project-github-logo.jpg'
                    title='Vehicle Manager'
                    text='This Android Application incorporates CRUD functionallity on a Vehicle Management System.
                    I utilized the M.V.C. desing patern, Java, XML, and Firebase Webservices to bulid the application
                    and Espresso to conduct testing.'
                    label='Project'
                    path='https://github.com/Robbie08/VehicleManager' />

                    <CardItem 
                    src='images/project-aiclub.png'
                    title='A.I. Club Project Lead'
                    text="I'm a project lead at the SDSU Artificial Intelligence Club.
                    I led a project where we used Data Maniupulation and Machine Leaning models to 
                    built income prediction models."
                    label='Club Affilication'
                    path='https://github.com/Robbie08/income-prediction' />

                    <CardItem 
                    src='images/project-codeday-hackathon.jpg'
                    title='Hackathon'
                    text='Participated in the Codeday Hackathon 
                    and won the "Best Mobile Application" award 
                    out of 60 teams by creating a social motivation 
                    Android Application. My team and I engineered a mobile 
                    CRUD application using Java, Firebase, XML, and Agile.'
                    label='Hackathon'
                    path='https://www.codeday.org/' />
                </ul>
                <ul className='cards__items'>
                    <CardItem 
                    src='images/project-random-nums.PNG'
                    title='Random Numbers'
                    text="This React application uses the Numbers API to 
                    generate random facts about numbers. I created this 
                    application to practice consuming API's with React.js."
                    label='Project'
                    path='http://random-numbers-facts.herokuapp.com/' />

                    <CardItem 
                    src='images/project-parksmart.png'
                    title='Park Smart'
                    text='A brainchild of mine, this 
                    is an Android parking application 
                    for university students and faculty 
                    to find available parking spaces. 
                    I used Java, XML, Firebase Webservices and the Google Maps API.'
                    label='Project'
                    path='https://github.com/Robbie08/ParkSmart' />

                    <CardItem 
                    src='images/project-coin-search.png'
                    title='Crypto Price Tracker'
                    text="This website's intened purpose 
                    is for crypto lovers to be able to search 
                    crypto currency information as well as the 
                    latests news articles relevant to anything crypto. I used
                    Django, Python, Bootstrap, and the Crypto Compare API."
                    label='Project'
                    path=' https://github.com/Robbie08/CryptoWebApp' />
                </ul>
            </div>
        </div>
    )
}

export default Cards;