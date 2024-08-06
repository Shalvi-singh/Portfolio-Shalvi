
import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

import Skills from './skills.js'
import Project from './project.js'
import SuperSoftSkillAndContact from './SuperSoftSkillsAndContact.js';

function App() {
  return (
    <>
  <div className='intro'>
    
    <div className='imagebox'>
  <img src="intro-pic.jpeg" alt='loading.. ' className='profile-image'/>
   <div className='content'>
   <h1 className='h1'> Small Intro!</h1> 
    <p>Hey! I appreciate that you are here to know about an undergrad girl, <strong>Shalvi Singh</strong>, and that is me. <p>Hii,I am currently pursuing Bachelors of vocation in (web designing) from kalindi college, University of Delhi.</p>
     <p> My coding journey as a newbie web developer begans with the humble html and css,and the rest is history. </p>
     <p>When I'm not coding, you may find me exploring the great outdoors, experimenting with new colours, or diving into the beauty of Earth.
     </p></p>
  </div>
  </div>
  </div>
  <Skills/>
  <Project/>
  <SuperSoftSkillAndContact/>
  </>
  )
}

export default App;
