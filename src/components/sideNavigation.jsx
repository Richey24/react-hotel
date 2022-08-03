import React, { Component } from 'react';
import "../styles/sideNavigation.css"

class SideNavigation extends Component {
  state = { 
    links: [
      {
        name: "Dashboard",
        link: "/dashboard",
        icon: "fa fa-home",
      },
      {
        name: "Rooms",
        link: "/room",
        icon: "fa fa-users"
      },
      {
        name: "Customers",
        link: "/customer",
        icon: "fa fa-credit-card"
      },
      {
        name: "Bookings",
        link: "/bookings",
        icon: "fa fa-server"
      },
      {
        name: "Services",
        link: "/services",
        icon: "fa fa-chart-line"
      }
    ]
   } 

  render() { 
    return (
      <div className="sidenav">
        { this.getLinks() }
      </div>
    );
  }

  getLinks(){
    const { links } = this.state;
    return links.map( link => {
      return ( 
        <div className="links" key={link.name}> 
          <span className="icon">
            <i className={link.icon}></i> 
          </span>
          <span> { link.name } </span>
        </div>
      );
    })
  }
}
 
export default SideNavigation;