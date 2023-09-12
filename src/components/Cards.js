import React from 'react';
import CardItem  from './CardItem';
import './Cards.css';


function Cards(){
    return(
        <div className='cards' id='my_projects'>
            <div className='cards__header'>
                <h1>My Experience</h1>
            </div>
            
            <div className='cards__wrapper'>
                <ul className='cards__items'>
                    
                    <CardItem 
                    src='images/work_teradata.jpg'
                    title='Software Engineer'
                    text={`As a Teradata software engineer, I've honed expertise in distributed systems and cloud giants like AWS, Azure, and Google Cloud.
                    My coding toolkit features Java, Golang, and Python - the trio behind my resilient and scalable software creations.
                    A standout was my leadership in fortifying our distributed realm against brute force attacks, enriched by my
                    software engineering and design prowess. Get in contact with me to learn more about my experiences.`}
                    label='Work Experience'
                    path='https://www.linkedin.com/in/roberto-ortiz-/'/>
                    
                    <CardItem 
                    src='images/ViaSat_Logo.jpg'
                    title='Software Engineer Intern'
                    text='I worked on the Satellite Applications Team which is responsible for facilitating ground and
                    satellite communication. I spent the summer working on a monitoring and logging system that enhanced
                    the understanding, security od the system as well as improved bug tracking in the Satellite Application Services. During
                    my internship I learned and utilized valuable skills such as Golang, Kubernetes, Docker, Jenkins, and Postman. '
                    label='Work Experience'
                    path='https://www.linkedin.com/in/roberto-ortiz-/' />

                    <CardItem 
                    src='images/work_TA.png'
                    title='Computer Science T.A.'
                    text="I am a Teaching Assistant at the Computer Science Department
                    at SDSU. I write Java utilities that act as tools for students to 
                    use in their programs. I also write programs that test and validate the 
                    student's programming assignments. I hold office hours where I can help improve
                    students understanding of Data Structures in C++ and Java."
                    label='Work Experience'
                    path='https://www.linkedin.com/in/roberto-ortiz-/' />

                </ul>
                <ul className='cards__items'>


                    <CardItem 
                    src='images/webscraper-1.jpg'
                    title='Web Scraper'
                    text="I developed a real-time custom web scraping service using Golang. 
                    Initially a personal hobby project, I had the opportunity to present it during one of 
                    my senior seminars at SDSU. Click the image above to access the presentation, 
                    where I delve deep into the world of web scraping."
                    label='Project'
                    path='https://www.youtube.com/watch?v=ZM0JVgEDbBM' />

                    <CardItem 
                    src='images/project-aiclub.jpg'
                    title='A.I. Club Project Lead'
                    text="I'm a project lead at the SDSU Artificial Intelligence Club.
                    I led a project where we used Data Manipulation and Supervised Learning Machine Learning Algorithms to 
                    build income prediction models."
                    label='Club Affilication'
                    path='https://github.com/Robbie08/income-prediction' />


                    <CardItem 
                    src='images/project-codeday-hackathon.jpg'
                    title='Hackathon'
                    text='Won "Best Mobile Application" award 
                    out of 60 teams at Code Day Hackathon by creating a social motivation 
                    Android Application. My team and I engineered a mobile 
                    CRUD application using Java, Firebase, XML, and Agile.'
                    label='Hackathon'
                    path='https://www.codeday.org/' />
                </ul>
            
            </div>
        </div>
    )
}

export default Cards;