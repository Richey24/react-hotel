import React, { Component } from 'react'

/**
 * A JSX class representation of the topbar
 */
class Topbar extends Component {
  
  /**
   * 
   * @returns The JSX representation of the topbar
   */
  render() { 
    return (
      <div className="flex px-8 justify-end bg-white border-b-2 text-xl leading-[70px] text-primary-500 text-center">
        <span>
          Hotel Management System
        </span>
      </div>
    );
  }
}
 
export default Topbar;