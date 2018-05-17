import React, { Component } from 'react';
import './section.css';
import Title from '../Title'

class Section extends Component {
    constructor (props) {
        super(props);
      }
    render () {
        switch(this.props.componentName){
            case "title":
                return (
                    <div  className="full-screen">
                    <Title />
                    </div>
                )
            case "contact":
                return (
                    <div  className="full-screen">
                    <Contact />
                    </div>
                )
        }
        
    }
}

export default Section;