import { useEffect, useState } from "react";
import Cards from "../components/Cards";
import { fetchBookings } from "../services/bookings.service";
import { fetchCustomers } from "../services/customer.service";
import { fetchRooms } from "../services/rooms.service";

/**
 * 
 * @returns A react component representation of the Dashboard Page
 */
export default function DashboardPage() {
  //the local state of the the total rooms
  const [totalRooms, setTotalRooms] = useState(0); 
  //The local state of the total customers
  const [totalCustomers, setTotalCustomers] = useState(0); 
  // The local state of the total bookings
  const [totalBookings, setTotalBookings] = useState(0); 
  //The local state of the total available rooms
  const [totalAvailableRooms, setTotalAvailableRooms] = useState(0); 
  //The local state of the total revenue
  const [todaysRevenue, setTodaysRevenue] = useState(0) 

  //Sets the data for the total rooms and the total available rooms
  const setRoomData = (res) => { 
    //Sets the total rooms data
    setTotalRooms(res.data.count); 
    //Sets the total available rooms
    setTotalAvailableRooms(res.data.rooms.filter(room => room.isAvailable).length) 
  }

  //Sets the total bookinds and todays revenue amount
  const setBookingsData = (res) => {
    //Sets the total bookings
    setTotalBookings(res.data.count); 
    //Sets the todays revenue amount
    setTodaysRevenue(`$${res.data.room.reduce((previousValue, currentValue) => previousValue + Number(currentValue.cost), 0)}`); 
  }

  //The use effect hook runs every time the page reloads
  useEffect(()=>{
    //sends a request to api for it to get all the rooms inside the database then sets the total rooms with retrieved data
    fetchRooms().then(res => { setRoomData(res) });
    //sends a request to the api for it to get all the customers in the database then sets the total customers with retrieved data
    fetchCustomers().then(res => { setTotalCustomers(res.data.count)});
    //sends a request to the api for it to get all the bookings inside the database then sets the total bookings with retrieved data
    fetchBookings().then(res => { setBookingsData(res) });
  }, []);

  //A list of all the card information
  const cardDetails = [
    {
      title: "Total Rooms",
      icon: "fa fa-bed",
      value: totalRooms
    },
    {
      title: "Total Customers",
      icon: "fa fa-users",
      value: totalCustomers
    },
    {
      title: "Total Bookings",
      icon: "fa fa-credit-card",
      value: totalBookings
    },
    {
      title: "Available Rooms",
      icon: "fa fa-bell",
      value: totalAvailableRooms
    },
    {
      title: "Todays Revenue",
      icon: "fa fa-bell",
      value: todaysRevenue
    }
  ]

  //Returns the JSX representation of the dashboard page
  return (
    <div className="flex gap-10 justify-center mx-auto items-start flex-wrap max-w-[50rem]">
      { 
        //Maps the card information to its respective card component
        cardDetails
        .map( (detail, index) => <Cards title={detail.title} icon={detail.icon} value={detail.value} key={ index }/>)
      }
    </div>
  )
}