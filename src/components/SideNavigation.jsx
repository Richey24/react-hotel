import React, { Component } from 'react';
import { Link } from "react-router-dom"
import "../styles/sideNavigation.css"

class SideNavigation extends Component {
  state = { 
    links: [
      {
        name: "Dashboard",
        path: "/dashboard",
        icon: "fa fa-sign-language",
      },
      {
        name: "Rooms",
        path: "/rooms",
        icon: "fa fa-users",
      },
      {
        name: "Customers",
        path: "/customers",
        icon: "fa fa-credit-card",
      },
      {
        name: "Bookings",
        path: "/bookings",
        icon: "fa fa-server",
      },
      {
        name: "Services",
        path: "/services",
        icon: "fa fa-chart-line",
      }
    ]
   } 

  render() { 
    return (
      <div className="sidenav">
        { this.getLinks() }
        <div>
          <Link className='links' to="/logout">
            <span className="icon">
              <i className="fa fa-sign-in"></i> 
            </span>
            
            <span>Logout</span>
          </Link>
        </div>
      </div>
    );
  }

  getLinks(){
    const { links } = this.state;
    return links.map( link => {
      return ( 
        <Link className="links" key={link.name} to={link.path}> 
          <span className="icon">
            <i className={link.icon}></i> 
          </span>
          
          <span> { link.name } </span>
        </Link>
      );
    })
  }
}
 
export default SideNavigation;