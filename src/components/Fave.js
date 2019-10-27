import React, { Component } from "react";

export default class Fave extends Component {
  handleClick = e => {
    e.stopPropagation();
    this.props.onFaveToggle();
  };

  render() {
    const isFave = this.props.isFave ? "remove_from_queue" : "add_to_queue";
    return (
      <div onClick={this.handleClick} className={`film-row-fave ${isFave}`}>
        <p className="material-icons">{isFave}</p>
      </div>
    );
  }
}
