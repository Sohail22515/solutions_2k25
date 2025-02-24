import React, { Suspense } from "react";
import MainPage from "./pages/MainPage";
import Events from "./components/Events";

import Gaming from "./fields/Gaming";
import Coding from "./fields/Coding";
import OpenEvents from "./fields/OpenEvents";
import Robotics from "./fields/Robotics";
import CyberSecurity from "./fields/CyberSecurity";
import Gdxr from "./fields/Gdxr";
import MachineLearning from "./fields/MachineLearing";
import Ev from "./fields/Ev";

import First from "./schedule/First";

import { BrowserRouter, Route, Routes } from "react-router-dom";


// Dynamically import the Team component
const Teams = React.lazy(() => import("./components/Team"));

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/events" element={<Events />} />
          <Route path="/events/gaming" element={<Gaming/>} />
          <Route path="/events/coding" element={<Coding/>} />
          <Route path="/events/openEvents" element={<OpenEvents/>} />
          <Route path="/events/robotics" element={<Robotics/>} />
          <Route path="/events/cyberSecurity" element={<CyberSecurity/>} />
          <Route path="/events/gdxr" element={<Gdxr/>} />
          <Route path="/events/machineLearning" element={<MachineLearning/>} />
          <Route path="/events/ev" element={<Ev/>} />
          <Route path="/events/schedule" element={<First />} />
          {/* Wrap only the Team component with Suspense */}
          <Route
            path="/events/team"
            element={
              <Suspense fallback={<div>Loading Team...</div>}>
                <Teams />
              </Suspense>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
