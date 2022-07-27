import React from "react";
import profilePic from '../../assets/profile-pic.png';

export default function About(){
    return(
        <main>
            <div id="about">
            <h1>ABOUT ME</h1>
                <img src={profilePic} alt="Me"/>
                <div>
                    <p>Hello! My name is Stephanie Ramos Rodriguez and I'm a ever growing as a Full Stack Web Developer.</p>
                    <p>I have recently graduated from a coding bootcamp from the University of Riverside, Extension.</p>
                    <p>Combining my years of work experience in Education and my new found love od coding, I know my skills will grow with the ever-changing and exciting field of Tech!</p>
                </div>
            </div>
        </main>
    );
};