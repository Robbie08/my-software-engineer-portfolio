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
                With a simple C++ program, my passion for Computer Science ignited, leading me to build numerous 
                Services and Mobile/Web applications. Through hands-on experience, I've continuously honed my skills 
                and delved into a wide array of languages, tools, and frameworks, including AWS, Golang, C/C++, Java, 
                JavaScript, React.js, Python, Git, Kubernetes, Docker, and more. 
                As I graduated, my focus shifted to becoming a specialized backend software engineer, with a strong 
                emphasis on distributed systems in the cloud.
                </p>
                <p className='about-bio-paragraph'>
                As a software engineer, I bring a powerful combination of technical expertise, effective communication 
                skills, an insatiable thirst for knowledge, and a pragmatic problem-solving approach. 
                These qualities enable me to seamlessly collaborate with teams and drive impactful results.
                </p>
                <p className='about-bio-paragraph'>
                When I'm not coding, you'll often find me immersed in the exhilarating world of soccer, both as an 
                avid spectator and an enthusiastic player. The teamwork and competitive spirit of the 
                game inspire me to excel on and off the field.
                </p>
                <p className='about-bio-paragraph'>
                If you're seeking a backend-focused Software Engineer with deep expertise in distributed systems 
                in the cloud, I warmly invite you to connect with me. Let's explore how my background aligns with 
                your engineering needs and kick-start exciting projects together. For more information, 
                feel free to visit my LinkedIn profile or refer to my resume.
                </p>
            </section>
        </div>
    )
};

export default About;