import React, { Component } from "react";
import BodyThuKinh from "./BodyThuKinh";
import HeaderThuKinh from "./HeaderThuKinh";

export default class BaiTapThuKinh extends Component {
  render() {
    return (
      <div style={{ backgroundImage: `url("./glassesImage/background.jpg")` }}>
        <HeaderThuKinh></HeaderThuKinh>
        <BodyThuKinh></BodyThuKinh>
      </div>
    );
  }
}
