import React from "react";


const date = new Date()
const hours = date.getHours()
let timeOfDay

if (hours < 12) {
  timeOfDay = "Morning"
  } else if (hours >= 12 && hours < 17) {
    timeOfDay = "Afternoon"
  } else {
    timeOfDay = "Evening"
}


export const Home = () => (
  <div>

    <div className="jumbotron jumbotron-fluid text-white">
      <div className="container text-sm-center pt-5">
        <h1 className="display-2">Carol Tawaify</h1>
        <p className="lead">A Front-End developer</p>
        <div className="btn-group mt-4" role="group" aria-label="Callout buttons">
          <a className="btn btn-dark btn-lg" href="/projects">See projects</a>
        </div>
      </div>
    </div>

    <div className="text">
      <h2 className="bg-light ">Good {timeOfDay}!</h2>
      <p className="bg-light ">I'm Carol. I'm a multi-talented person with over 5+ years of experiences in wide range of disigning websites.</p>
      <p className="bg-light ">I'm a 25 years old female with a Syrian citizenship, I studied web develoment at MEC-Horizons and graduated with an Excellant rating.</p>
      <p className="bg-light ">I'm also a multi-disciplinary maker with over 5 years of experiences in wide rang of design disciplines, manager, advisor, front-end developer, music enthusiast,traveler, photographer and more.</p>
    </div>

    <div className="row py-4 text-muted text">
      <div className="col-md col-xl-8">
        <p><strong>Questions?</strong></p>
        <p>We've got answers. Try us.</p>
      </div>
      <div className="col-md col-xl-4 ml-auto">
        <p><strong>You can also DM me here:</strong></p>
        <div className="input-group">
            <span className="input-group-btn">
            <button className="btn btn-dark" type="button">Click to send a massage</button>
            </span>
        </div>
      </div>
    </div>

  </div>
)
