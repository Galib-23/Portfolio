import {
    createBrowserRouter,
} from "react-router-dom";
import Home from "../Pages/Home/Home/Home";
import Dashboard from "../Pages/DashboardPages/Dashboard";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Home></Home>,
    },
    {
      path: "/galib/dashboard-stats",
      element: <Dashboard />
    }
]);
export default router;