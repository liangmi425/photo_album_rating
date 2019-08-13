import React, { Component } from 'react'

export default class extends Component {
  render() {
    return (
      <div className="col-3 mb-3" data-category={this.props.category}>
        <div className="card">
          <img style={{ maxHeight: '150px', cursor: 'pointer' }} className="card-img-top img-responsive" src={this.props.imageUrl} alt="Images here..."  onClick={this.props.onClick}/>
          <div className="card-body">
            <h5 className="card-title">{this.props.title}</h5>
            <p className="card-text">{this.props.description.length > 90 ? this.props.description.slice(0, 90) + '...' : this.props.description}</p>
          </div>
          <div className="card-footer">
            <span className="badge badge-info"><small>{this.props.category}</small></span>
            <div className="card-footer__action">
              <img src="Yes.png" className="card-footer__action_btn ml-1"/>
              <img src="No.png" className="card-footer__action_btn ml-1"/>
              <img src="Maybe.png" className="card-footer__action_btn ml-1"/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}