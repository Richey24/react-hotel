import React, { Component } from 'react';
import "../styles/card.css"

class Cards extends Component {
  state = {  } 
  render() { 
    return (
      <div className='card'>
        <div className='card_content'>
          
          <div className='card_title'>
            { this.props.title }
          </div>
          <div className='card_value'>
            { this.props.value }
          </div>
        </div>

        <div className='card_icon'>
          <span className="icon">
            <i className={ this.props.icon }></i> 
          </span>
        </div>
      </div>
    );
  }
}
 
export default Cards;