import LoginPage from "../pages/Login"
import AppLayout from "../layouts/AppLayout"
import Error404Page from "../pages/404"
import appRoutes from "./app.routes"


const layoutRoutes = [
  {
    path: "/login",
    component: <LoginPage/>
  },
  {
    path: "app",
    component: <AppLayout/>,
    children: [...appRoutes]
  },
  {
    path: "*",
    component: <Error404Page/>
  }
]

export default layoutRoutes