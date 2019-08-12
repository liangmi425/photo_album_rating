import React, { Component } from 'react'

export default class extends Component {
  render() {
    return (
      <div className="col-3 mb-3" data-category={this.props.category} onClick={this.props.onClick}>
        <div className="card">
          <img style={{ maxHeight: '150px' }} className="card-img-top img-responsive" src={this.props.imageUrl} alt="Images here..." />
          <div className="card-body">
            <h5 className="card-title">{this.props.title}</h5>
            <p className="card-text">{this.props.description}</p>
          </div>
          <div className="card-footer">
            <span className="badge badge-info"><small>{this.props.category}</small></span>
          </div>
        </div>
      </div>
    );
  }
}