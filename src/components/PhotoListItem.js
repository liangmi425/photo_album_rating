import React, { Component } from 'react'

export default class extends Component {
  render() {
    return (
      <div className="card mb-3" data-category={this.props.category} onClick={this.props.onClick}>
        <div className="row no-gutters">
          <div className="col-md-4">
            <img style={{height: '100%'}} className="card-img rounded-0" src={this.props.imageUrl} alt="Images here..." />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{this.props.title}</h5>
              <p className="card-text">{this.props.description}</p>
              <p className="card-text">
                <span className="badge badge-info"><small>{this.props.category}</small></span>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}