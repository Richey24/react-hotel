import { Outlet } from "react-router-dom"
import SideNavigation from "../components/SideNavigation";

function AppLayout() {
  return (
    <div className="app_layout">
      <div className="app_sidebar">
        <SideNavigation />
      </div>

      <div className="app_content_wrapper">
        <div className="app_header">
          <h2>Hotel Management System</h2>
        </div>

        <div className="app_content">
          <Outlet/>
        </div>
      </div>
    </div>
  );
}

export default AppLayout;
