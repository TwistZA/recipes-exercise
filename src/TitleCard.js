import React, { Component } from "react";
import "./TitleCard.css";

export default class TitleCard extends Component {
  render() {
    return <div className="TitleCard">{this.props.children}</div>;
  }
}
