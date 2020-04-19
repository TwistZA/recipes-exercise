import React, { Component } from "react";
import TitleCard from "./TitleCard.js";
import "./Recipe.css";
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Link,
  Switch,
} from "react-router-dom";

export default class Recipe extends Component {
  render() {
    const url = this.props.imageURL;
    const name = this.props.name;
    const time = this.props.time.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0
    );

    return (
      <div>
        <Link exact className="all-links" to={`/recipes/${name}`}>
          <TitleCard>
            <h4>{name}</h4>
            <img className="card_img" src={url} alt={name} />
            <h4>{time} minutes</h4>
          </TitleCard>
        </Link>
      </div>
    );
  }
}
