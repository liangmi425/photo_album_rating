import React, { Component } from 'react'

export default class extends Component {
  render() {
    return (
      <a href="#" onClick={() => this.props.onClick}>{this.props.category}</a>
    )
  }
}