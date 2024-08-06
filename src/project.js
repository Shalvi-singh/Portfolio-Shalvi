import React from 'react';
import './project.css';

function Project() {
  return (
    <div className="Project">
      
      <div className="project-details">
      <h1 className="h1">Mini Projects</h1>
        <h3 className="project-name">KnowYourWorld:</h3>
        <p className="project-description">
        KnowYourWorld, a dynamic web application built using Angular 17. This project aims to provide users with insightful and comprehensive information about countries around the world. The primary goal of the project is to offer detailed profiles for each country, including population, languages, flag images and location.


<ul>Technical details:</ul>

<li>Framework- Angular 17 </li>
<li>Data integration -API integrations for real-time data fetching and updates.</li>
<li>UI/UX design- Implemented using Angular material for a modern look and feel.</li>


<p>link- github.com/Shalvi-singh/KnowYourWorld</p>
        </p>
        <p className='manymore'>And many more mini  web project.....</p>
      </div>
      <div className="project-image">
        <img src="/project.png" alt="Project Thumbnail" />
      </div>
    </div>

    
  );
}

export default Project;
