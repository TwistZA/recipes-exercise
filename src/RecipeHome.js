import React, { Component } from "react";
import Recipe from "./Recipe.js";
import "./RecipeHome.css";

export default class RecipeHome extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    console.log("received props=" + this.props.stuff.recipes);
    let newList = [...this.props.stuff.recipes];
    console.log("newList=" + newList);

    return (
      <div>
        <h4 className="display-4 text-light">The Recipes</h4>

        <div className="recipeHome">
          {newList.map((item) => {
            return (
              <Recipe
                name={item.name}
                imageURL={item.imageURL}
                time={item.timers}
                key={item.name}
              />
            );
          })}
        </div>
      </div>
    );
  }
}
