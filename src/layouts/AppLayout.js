import { Outlet } from "react-router-dom"
import SideNavigation from "../components/SideNavigation";
import Topbar from "../components/Topbar";

function AppLayout() {
  return (
    <div className="app_layout">
      <div className="app_sidebar">
        <SideNavigation />
      </div>

      <div className="app_content_wrapper">
        <div>
          <Topbar/>
        </div>

        <div className="app_content">
          <Outlet/>
        </div>
      </div>
    </div>
  );
}

export default AppLayout;
