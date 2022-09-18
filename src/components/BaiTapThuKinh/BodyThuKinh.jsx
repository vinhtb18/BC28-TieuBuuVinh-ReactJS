import React, { Component } from "react";
import style from "../../css/BodyThuKinh.min.css";
const arrGlasses = [
  {
    id: 1,
    price: 30,
    name: "GUCCI G8850U",
    url: "./glassesImage/v1.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 2,
    price: 50,
    name: "GUCCI G8759H",
    url: "./glassesImage/v2.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 3,
    price: 30,
    name: "DIOR D6700HQ",
    url: "./glassesImage/v3.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 4,
    price: 70,
    name: "DIOR D6005U",
    url: "./glassesImage/v4.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 5,
    price: 40,
    name: "PRADA P8750",
    url: "./glassesImage/v5.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 6,
    price: 60,
    name: "PRADA P9700",
    url: "./glassesImage/v6.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 7,
    price: 80,
    name: "FENDI F8750",
    url: "./glassesImage/v7.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 8,
    price: 100,
    name: "FENDI F8500",
    url: "./glassesImage/v8.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 9,
    price: 60,
    name: "FENDI F4300",
    url: "./glassesImage/v9.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
];

export default class BodyThuKinh extends Component {
  state = {
    imgSrc: "./glassesImage/v1.png",
  };

  renderGlasses = () => {
    return arrGlasses.map((item, index) => {
      return (
        <a
          href=""
          className="col-2"
          key={item.id}
          type="button"
          onClick={(e) => {
            e.preventDefault();
            this.setState({
              imgSrc: `./glassesImage/v${item.id}.png`,
            });
          }}
        >
          <img src={item.url} alt="" className="w-100" />
        </a>
      );
    });
  };
  render() {
    return (
      <div className="container">
        <div className="text-center d-flex justify-content-around">
          <div id="left-model">
            <img src="./glassesImage/model.jpg" alt="" height={300} />
            <img src={this.state.imgSrc} alt="" id="selected-glass" />
          </div>

          <img src="./glassesImage/model.jpg" alt="" height={300} />
        </div>
        <div className="text-center m-5 row bg-light">
          {this.renderGlasses()}
        </div>
      </div>
    );
  }
}
