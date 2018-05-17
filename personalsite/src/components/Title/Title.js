import React, { Component } from 'react';
import './Title.css';

class Section extends Component {
    constructor (props) {
        super(props);
      }
    render () {
        return (
            <div>
                <h1 className="title">Hi. I'm Eric. And I'm a back end designer.</h1>
                <p>(Hi Eric)</p>
            </div>
        )
    }
}

export default Section;