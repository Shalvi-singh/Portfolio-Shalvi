import React from "react";
import { useEffect } from "react";
import './skills.css'
function Skills(){

    useEffect(() => {
        const listItems = document.querySelectorAll('.skill-category li');
        listItems.forEach((item, index) => {
          item.style.animationDelay = `${index * 0.1}s`;
          item.classList.add('slide-in');
        });
      }, []);

    return(
        <div className="Skills">
      <h1 className="h1">Skills & Technologies</h1>
      <div className="skills-grid">
        <div className="skill-category">
          <h3>Programming Languages</h3>
          <ul>
            <li>JavaScript</li>
            <li>Python</li>
            <li>Php</li>
          </ul>
        </div>
        <div className="skill-category">
          <h3>Libraries</h3>
          <ul>
            <li>React</li>
            <li>JQuery</li>
            <li>Next Ui</li>
            
          </ul>
        </div> 
        <div className="skill-category">
          <h3>Frameworks</h3>
          <ul>
            <li>Angular 17</li>
            <li>Bootstrap</li>
            
            <li>vite</li>
            
          </ul>
        </div>
        <div className="skill-category">
          <h3>Tools</h3>
          <ul>
            <li>Git & GitHub</li>
            <li>Docker</li>
            <li>Postman</li>
            
          </ul>
        </div>
        <div className="skill-category">
          <h3> Designing tools</h3>
          <ul>
            <li>Canva</li>
            <li>Figma</li>
            
          </ul>
        </div>
      </div>
    </div>
  );
    
}
export default Skills;