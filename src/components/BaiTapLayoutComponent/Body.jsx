import React, { Component } from "react";
import Banner from "./Banner";
import Item from "./Item";

export default class Body extends Component {
  render() {
    return (
      <div>
        <Banner />
        <div className="container px-lg-5 d-flex justify-content-between">
          <Item />
          <Item />
          <Item />
          <Item />
        </div>
      </div>
    );
  }
}
