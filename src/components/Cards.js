import React from 'react';
import CardItem  from './CardItem';
import './Cards.css';
function Cards(){
    return(
        <div className='cards'>
            <h1>My Projects</h1>
            <div className='cards__wrapper'>
                <ul className='cards__items'>
                    <CardItem 
                    src='images/hero-image1.jpg'
                    title='Park Smart'
                    text='A brainchild of mine, this 
                    is an Android parking application 
                    for university students and faculty 
                    to find available parking spaces in 
                    a campus lot or parking structure. 
                    This application incorporates Firebase 
                    database for user and parking lot information
                     and also incorporates the Google Maps API.'
                    label='PARK SMART (2017)'
                    path='/services' />
                    <CardItem 
                    src='images/hero-image1.jpg'
                    title='Park Smart'
                    text='A brainchild of mine, this 
                    is an Android parking application 
                    for university students and faculty 
                    to find available parking spaces in 
                    a campus lot or parking structure. 
                    This application incorporates Firebase 
                    database for user and parking lot information
                     and also incorporates the Google Maps API.'
                    label='PARK SMART (2017)'
                    path='/services' />
                    <CardItem 
                    src='images/hero-image1.jpg'
                    title='Park Smart'
                    text='A brainchild of mine, this 
                    is an Android parking application 
                    for university students and faculty 
                    to find available parking spaces in 
                    a campus lot or parking structure. 
                    This application incorporates Firebase 
                    database for user and parking lot information
                     and also incorporates the Google Maps API.'
                    label='PARK SMART (2017)'
                    path='/services' />
                    <CardItem 
                    src='images/hero-image1.jpg'
                    title='Park Smart'
                    text='A brainchild of mine, this 
                    is an Android parking application 
                    for university students and faculty 
                    to find available parking spaces in 
                    a campus lot or parking structure. 
                    This application incorporates Firebase 
                    database for user and parking lot information
                     and also incorporates the Google Maps API.'
                    label='PARK SMART (2017)'
                    path='/services' />
                    
                </ul>
            </div>
        </div>
    )
}

export default Cards;