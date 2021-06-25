import React, { Component } from "react"

export default class Screen extends Component {
  render() {
    return <div id={this.props.id}>{this.props.currentNumber}</div>
  }
}
