import React, { Component } from "react";
import "./LongRecipe.css";
import { Redirect } from "react-router-dom";

import App from "./App.js";

export default class LongRecipe extends Component {
  render() {
    console.log("App.defaultProps=" + App.defaultProps.recipes[0].name);
    let recipeObject;
    let validRoute = false;

    try {
      recipeObject = App.defaultProps.recipes.filter(
        (item) => item.name === this.props.match.params.name
      );
      validRoute = true;
      console.log("LongRecipe Props I need=" + recipeObject[0].imageURL);
    } catch {
      validRoute = false;
      console.log("ERROR no match#######");
      return <Redirect to="/Recipes" />;
    }

    if (recipeObject.length === 0) {
      console.log("INVALID recipeObject.length=" + recipeObject.length);
    } else {
      console.log("VALID recipeObject.length=" + recipeObject.length);
    }

    const name = this.props.match.params.name;
    const imgURL = recipeObject[0].imageURL;
    const time = recipeObject[0].timers.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0
    );
    const steps = recipeObject[0].steps;

    return (
      <div className="LongRecipeContainer">
        <h4 className="display-4 text-light">{name}</h4>
        <img className="long_recipe_card_img" src={imgURL} alt={name} />
        <h4>{time} minutes</h4>
        <h4 className="display-4 text-light">Steps</h4>

        {steps.map((step) => (
          <li>{step}</li>
        ))}

        <button
          className="btn-hover color-7"
          onClick={this.props.history.goBack}
        >
          go back
        </button>
      </div>
    );
  }
}
