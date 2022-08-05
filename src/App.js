import "./styles/app.css";
import "./styles/form.css"
import SideNavigation from "./components/SideNavigation";
import appRoutes from "./routes/appRoutes";
import { Routes, Route } from "react-router-dom"

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
          <Routes>
            { appRoutes.map( ( route, index ) => <Route path={route.path} element={route.component} key={index}/>) }
          </Routes>
        </div>
      </div>      
    </div>
  );
}

export default App;
