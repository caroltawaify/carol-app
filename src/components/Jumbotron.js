import React, { Component } from "react";

export default class Jumbotron extends Component {
    render() {
        return(
            <div className="jumbotron jumbotron-fluid text-white">
                <div className="container text-sm-center pt-5">
                    <h1 className="display-2">Carol Tawaify</h1>
                    <p className="lead">A Front-End developer</p>
                    <div className="btn-group mt-4" role="group" aria-label="Callout buttons">
                        <a className="btn btn-dark btn-lg" href="/projects">See projects</a>
                    </div>
                </div>
            </div>
        )
    }
}