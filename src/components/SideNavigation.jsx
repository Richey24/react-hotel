import React, { Component } from 'react';
import { Link } from "react-router-dom"

/**
 * A react class component that represents the Side Navigation. 
 * It extends the component class from the react library
 */
class SideNavigation extends Component {
  state = { 
    //All the information for the links that are used on the side navigation
    links: [
      {
        name: "Dashboard", //Name of the link
        path: "/app/dashboard", //Path the link will take you
        icon: "fa fa-chart-line", //Icon the link will use
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
  
  /**
   * 
   * @returns The JSX representation of the side navigation for to be rendered as html on the webpage
   */
  render() { 
    return (
      <div className="flex flex-col items-start pt-1 font-medium border border-primary-100 h-full w-full bg-white">
        
        {/*Navigation text at the header text at the top of the side navigation*/}
        <div className='flex flex-row items-end gap-4 no-underline text-primary-500 w-full py-6 pl-4'>
          NAVIGATION
        </div>

        {/*Renders all the links on the side navigation excluding the logout link*/}
        { this.getLinks() }
        
        {/*Logout Button JSX*/}
        <Link className='flex flex-row items-end gap-4 no-underline text-primary-500 w-full py-4 pl-8 hover:text-primary-100 hover:font-medium hover:bg-primary-500' to="/login" onClick={() => { localStorage.clear() }}>
          <span className="icon">
            <i className="fa fa-share-square"></i> 
          </span>
          
          <span>Logout</span>
        </Link>
      </div>
    );
  }

 /**
  * 
  * @returns The JSX representation of the Links/Buttons on the side navigation for it to be rendered inside the side navigation
  */
  getLinks(){
    const { links } = this.state;
    return links.map( link => {
      return ( 
        <Link className='flex flex-row items-end gap-4 no-underline text-primary-500 w-full py-4 pl-8 hover:text-primary-100 hover:font-medium hover:bg-primary-500' key={link.name} to={link.path}> 
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