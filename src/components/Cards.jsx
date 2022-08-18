import React, { Component } from 'react';

/**
 * React Class Componenet that renders the html of a custom card.
 */
class Cards extends Component {
  state = {  } 

  //The render function renders the html inside the parenthesis on to the page
  render() { 
    return (
      <div className='flex justify-between w-80 p-7 bg-white border-2 shadow-md shadow-primary-100 border-primary-muted'>
        <div className='flex flex-col gap-2'>
          
          <div className='text-base'>
            { this.props.title }
          </div>
          <div className='text-2xl'>
            { this.props.value }
          </div>
        </div>

        <div className='mt-4 card_icon'>
          <span className="text-base py-3 px-4 text-primary-500 bg-primary-muted rounded-full icon">
            <i className={ this.props.icon }></i> 
          </span>
        </div>
      </div>
    );
  }
}
 
export default Cards;