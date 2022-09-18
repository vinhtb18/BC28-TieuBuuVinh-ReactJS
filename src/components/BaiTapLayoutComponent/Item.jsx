import React, { Component } from "react";

export default class Item extends Component {
  render() {
    return (
      <div className="card" style={{ width: "18rem" }}>
        <img
          src="https://i.pravatar.cc?u=200"
          className="card-img-top"
          alt="..."
        />
        <div className="card-body text-center">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
            labore possimus eum vitae deleniti, aliquam repellat maiores
            doloribus officia, culpa rem itaque minima vel quia deserunt nisi
            sapiente. Enim, temporibus.
          </p>
        </div>
        <div className="card-footer text-center">
          <a href="#" className="btn btn-primary">
            Findout more!
          </a>
        </div>
      </div>
    );
  }
}
