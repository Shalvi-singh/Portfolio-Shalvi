import React from 'react';
import { useEffect } from 'react';
import './SuperSoftSkillAndContact.css';

function SuperSoftSkillAndContact() {

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add('slide-in');
            }
          });
        });
    
        const items = document.querySelectorAll('.soft-skill li');
        items.forEach(item => observer.observe(item));
    
    
      },[]);
  return (
    <div className="SuperSoftSkillAndContact">
      <div className="soft-skill">
        <h3 className='h3'>Super Soft Skill</h3>
        <ul>
          <li>sketching</li>
          <li>Art and painting</li>
          <li>semiclassical dance -(intermediate)</li>
        </ul>
      </div>
      <div className="contact">
        <h3 className='h3'>Contact</h3>
        <ul>
          <li><a href="mailto:shalvisingh044@gmail.com"><i className='fab fa-envelope'></i> shalvisingh044@gmail.com</a></li>
          <li><a href="https://www.linkedin.com/in/shalvi-singh-8t0n/"><i className='fab fa-linkedin'></i>  shalvi-singh-8t0n</a></li>
          <li><a href="https://github.com/Shalvi-singh"><i className='fab fa-github'></i> Shalvi-singh</a></li>
        </ul>
      </div>
    </div>
  );
}

export default SuperSoftSkillAndContact;
