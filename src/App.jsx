import React from "react";
import { Route, Routes } from "react-router-dom";
import AssignmentDetails from "./AssignmentDetails";
import Assignments from "./Assignments";
import Lectures from "./Lectures";
import Sidebar from "./Sidebar";

function App() {
  return (
    <div className="h-full bg-gray-300 flex">
      <div>
        <Sidebar />
      </div>

      <div className="ml-52">
        <Routes>
          <Route path="/" element={<Lectures />} />
          <Route path="assignments/:assignmentId/details" element={<AssignmentDetails />} />
          <Route path="/assignments" element={<Assignments />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;