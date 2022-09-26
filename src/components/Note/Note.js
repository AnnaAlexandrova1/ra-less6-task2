import { Component } from 'react';
import React from 'react';
import './note.css';

class Note extends Component {
  render() {
    return (
      <div className="note" id={this.props.id}>
        <p>{this.props.text}</p>
        <a
          href="#0"
          className="note__ctrl-delete"
          onClick={this.props.onDeleteClick.bind(this)}
        >&times;
        </a>
      </div>
    );
  }
}

export default Note;