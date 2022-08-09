import React, { Component } from 'react';
import { Link } from "react-router-dom"
import "../styles/sideNavigation.css"

class SideNavigation extends Component {
  state = { 
    links: [
      {
        name: "Dashboard",
        path: "/app/dashboard",
        icon: "fa fa-chart-line",
      },
      {
        name: "Rooms",
        path: "/app/rooms",
        icon: "fa fa-bed",
      },
      {
        name: "Customers",
        path: "/app/customers",
        icon: "fa fa-users",
      },
      {
        name: "Bookings",
        path: "/app/bookings",
        icon: "fa fa-credit-card",
      },
      {
        name: "Services",
        path: "/app/services",
        icon: "fa fa-bell",
      }
    ]
   } 

  render() { 
    return (
      <div className="sidenav">
        { this.getLinks() }
        
        <Link className='links' to="/login">
          <span className="icon">
            <i className="fa fa-share-square"></i> 
          </span>
          
          <span>Logout</span>
        </Link>
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