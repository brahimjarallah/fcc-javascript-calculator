import React, { Component } from "react"

export default class Button extends Component {
  runParentHandleClick = () => {
    this.props.handleClick(this.props.name)
  }

  render() {
    return (
      <button
        id={this.props.id}
        onClick={this.runParentHandleClick}
        className="button"
        // className="button"
      >
        {this.props.name}
      </button>
    )
  }
}
