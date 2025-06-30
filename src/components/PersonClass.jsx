import React, { Component } from "react";

export default class PersonClass extends Component {
  render() {
    const { name, surname, age } = this.props;
    return (
      <div>
        <span>
          Nombre y apellido: {name} {surname},{" "}
        </span>
        <span>edad: {age}</span>
      </div>
    );
  }
}
