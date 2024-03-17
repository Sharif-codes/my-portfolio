import { createBrowserRouter } from "react-router-dom";
import Main from "../MainLayout/Main";
import Home from "../pages/Home/Home";
import ContactUs from "../pages/Contact/ContactUs";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path:'/',
            element: <Home></Home>
        },
        {
            path:'/contact',
            element: <ContactUs></ContactUs>
        },
      ]
    },
  ]);
export default router;