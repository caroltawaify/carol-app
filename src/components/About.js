import React from "react";
import image from '../images/carol.jpg';

export const About = () => (
  <div className="text">
        <div id="about" className="row">
        <div className="col-lg order-lg-2">
          <h3 className="mb-4 text-center">About me</h3>
          <img className="mb-4 img-fluid rounded-circle" src={image} alt="MyImage"/>
        </div>
        <div className="col-lg order-lg-1">
		      <h3 className="mb-4 text-center">My Skills</h3>
  	      <p className="text-center">I'm passionate, expressive, multi-talented spirit with a natural ability to entertane and inspire.</p>
		      <p className="text-center">I don't like to define myself by the work I'v done. I define myself by the work  I want to do. Skills can be toyght, personality is inherent. I prefer to keep learning, continue challenging myself, and do interesting things that matter.</p>
          <p className="text-center">I'm a fast learner, able to pick up new skills and juggle different projects and roles with relative ease.</p>
          <p className="text-center">I'm also a multi-disciplinary maker with over 5 years of experiences in wide rang of design disciplines, manager, advisor, front-end developer, music enthusiast,traveler, photographer and more.</p>
        </div>
        <div className="col-lg order-3">
          <h3 className="mb-4 text-center">My Experience</h3>
					<div className="list-group">
					  <p className="list-group-item list-group-item-action text-center"><strong>Over 5 years of experiences in:</strong></p>
					  <p className="list-group-item list-group-item-action text-center"><strong>WorldPress</strong>: as a web developer</p>
            <p className="list-group-item list-group-item-action text-center"><strong>React</strong>:as a Front-End developer</p>
					  <p className="list-group-item list-group-item-action text-center"><strong>Node.js</strong>: as a Back-End developer</p>
					  <p className="list-group-item list-group-item-action text-center"><strong>JavaScript</strong>: as a web developer</p>
					  <p className="list-group-item list-group-item-action text-center"><strong>PHP</strong>: as a web developer</p>
					</div>
        </div>
      </div>
  </div>
);

