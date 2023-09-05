import React from "react";
import {  Routes,
  Route,
  Link,
  Navigate,
  Outlet, BrowserRouter, useLocation, useNavigate } from "react-router-dom";

import Main from "./pages/Main";

function App() {
  return (
	<BrowserRouter>
      <div className="App">

        <div className="container">
          <Routes>
            <Route element={<Main/>} path="/"></Route>
                        {/* Redirect to main page if nonexistent page is accessed */}
            <Route path="*" element={
              <Navigate to="/"/>
            }
          />
		  </Routes>
        </div>
      </div>
	  </BrowserRouter>
  );
}

export default App;
