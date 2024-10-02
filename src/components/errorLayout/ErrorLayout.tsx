import "./ErrorLayout.scss";

import { Outlet } from "react-router-dom";
import Navbar from "../header/Navbar";

const ErrorLayout = () => {
  return (
    <div className="error-layout">
      <Navbar />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default ErrorLayout;
