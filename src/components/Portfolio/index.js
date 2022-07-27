import React, { useState } from 'react';
import Project from "../Project";

export default function Portfolio(){
    const [project] = useState([
        {
            name: 'FREELANCR',
            description: 'A platform for developers to be found for jobs.',
            link: "https://self-management-app.herokuapp.com/",
            repo: "https://github.com/Callank21/Self-Management-App",
            img: "Freelancr.png"

          },
          {
            name: 'Self-Management-App',
            description: 'A full stack application to manage tasks with time management',
            link: "ADD DEPLOYED HERE",
            repo: "https://github.com/Callank21/Freelancing-Gig-App",
            img: "Self-App.png"
          },
      ]);
      
      const cards = project.map((project, i) => {
        return (
        <Project
          key={i}
          {...project}
          />
        )
      })
      return( 
      <main>
        <h1>Portfolio</h1>
        <div className="cards">
          {cards}
          </div>
      </main>
      );
  }