import Cards from "../components/Cards";

export default function DashboardPage() {
  const cardDetails = [
    {
      title: "Total Rooms",
      icon: "fa fa-bed",
      value: "1000"
    },
    {
      title: "Total Customers",
      icon: "fa fa-users",
      value: "1000"
    },
    {
      title: "Total Bookings",
      icon: "fa fa-credit-card",
      value: "1000"
    },
    {
      title: "Available Rooms",
      icon: "fa fa-bell",
      value: "1000"
    },
    {
      title: "Todays Revenue",
      icon: "fa fa-bell",
      value: "1000"
    }
  ]

  return (
    <div className="page_content dashboard_content">
      { 
        cardDetails
        .map( (detail, index) => <Cards title={detail.title} icon={detail.icon} value={detail.value} key={ index }/>)
      }
    </div>
  )
}