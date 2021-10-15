import React from 'react';
import './About.css';
function About(){
    return(
        <div className='about-container' id='about'>
            <section className="about-header">
                <h1>About Me</h1>
            </section>
            <section className='about-bio'>
                <p className='about-bio-paragraph'>
                I'm a Senior at <b>San Diego State University</b> and I will attain my <b>B.S. 
                in Computer Science</b> in June 2022. My passion for 
                Computer Science started with a simple I/O program in <b>C++</b>. 
                Since then, I have worked on countless <b>Mobile/Web applications</b> and 
                <b> services</b>, allowing me to learn new languages, tools, and frameworks 
                like <b>Golang(Go), C/C++, Java, JavaScript, React.js, Python, Git</b>, and many more.
                I have recently started delving into the world of 
                Backend Software Engineering and currently I am working on a microservice that will scrape links
                from any targeted websites and provide them to the user.  
                </p>
                <p className='about-bio-paragraph'>
                I currently work as a <b>Teaching Assistant (TA)</b> for <b>The Computer Science Department</b> at <b>San Diego State Univeristy</b>.
                Besides academia, I am also experienced in the field. I recently completed a summer internship with 
                <b> Viasat Inc</b> as a <b> Software Engineer</b>. There I worked on the team responsible for facilitating
                ground and satellite communication. Throughout my summer at Viasat, I learned Agile and Scrum 
                methedolgies and utilizied technologies like 
                <b> Golang(Go), Kuberentes, Docker, Jenkins, and DruidSQL</b>.
                </p>
                <p className='about-bio-paragraph'>
                Besides my computer science knowledge, three things that make me an effective 
                software engineer are that I am an excellent communicator, always eager to 
                learn more, and very pragmatic. <b>I am actively seeking a New-Graduate Software Engineer
                position; preferably on the Backend or Fullstack. </b>
                If my background aligns with the type of engineer you are searching for, 
                then please contact me. If you're not convinced yet, then please check out 
                my LinkedIn or resume. 
                </p>
            </section>
        </div>
    )
};

export default About;