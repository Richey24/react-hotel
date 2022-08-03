import "./styles/app.css";
import SideNavigation from "./components/sideNavigation";
import RoomPage from "./pages/Rooms";

function App() {
  return (
    <div className="app_layout">
      <div className="app_sidebar">
        <SideNavigation/>
      </div>

      <div className="app_content_wrapper">
        
        <div className="app_header">
          <h2>
            Hotel Management System
          </h2>
        </div>

        <div className="app_content">
          <RoomPage/>
        </div>
      </div>      
    </div>
  );
}

export default App;
