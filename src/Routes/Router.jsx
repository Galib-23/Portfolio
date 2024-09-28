import {
    createBrowserRouter,
} from "react-router-dom";
import Home from "../Pages/Home/Home/Home";
import Dashboard from "../Pages/DashboardPages/Dashboard";
import ClickDashboard from "../Pages/DashboardPages/ClickDashboard";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Home></Home>,
    },
    {
      path: "/galib/dashboard-stats",
      element: <Dashboard />
    },
    {
      path: "/galib/click-users",
      element: <ClickDashboard />
    }
]);
export default router;