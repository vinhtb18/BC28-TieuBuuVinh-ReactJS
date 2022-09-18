import React, { Component } from "react";

export default class Header extends Component {
  render() {
    return (
      <div style={{ backgroundColor: "black" }}>
        <nav className="navbar navbar-expand-sm navbar-dark container d-flex justify-content-between px-lg-5">
          <a className="navbar-brand" href="#">
            <h3>Start Bootstrap</h3>
          </a>

          <div
            className="collapse navbar-collapse d-flex justify-content-end"
            id="collapsibleNavId"
          >
            <ul className="navbar-nav  mt-2 mt-lg-0">
              <li className="nav-item">
                <a className="nav-link active" href="#" aria-current="page">
                  <h5>Home</h5>{" "}
                  <span className="visually-hidden">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <h5>About</h5>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <h5>Services</h5>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <h5>Contact</h5>
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}
