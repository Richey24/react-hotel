import { Outlet } from "react-router-dom"
import SideNavigation from "../components/SideNavigation";
import Topbar from "../components/Topbar";

/**
 * 
 * @returns A React component representation of the App Layout
 */
function AppLayout() {
  //returns the JSX representation of the App layout for it to be used on the webpage as html
  return (
    <div className="font-poppins h-screen w-full grid grid-cols-[250px_auto]">
      <div>
        <SideNavigation />
      </div>

      <div className="grid grid-rows-[100px_auto] bg-primary-white">
        <div>
          <Topbar/>
        </div>

        <div className="flex gap-4 justify-center mr-auto ml-auto items-start flex-wrap">
          <Outlet/>
        </div>
      </div>
    </div>
  );
}

export default AppLayout;
