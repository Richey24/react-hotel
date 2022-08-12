import React, { Component } from 'react';
import "../styles/topbar.css"

class Topbar extends Component {
  state = {  } 
  render() { 
    return (
      <div className="app_header">
        <span>
          Hotel Management System
        </span>
      </div>
    );
  }
}
 
export default Topbar;