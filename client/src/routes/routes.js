import AddUser from "../pages/AddUser";
import Home from "../pages/Home";

// Normal User
let routes = [

    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/add",
      element: <AddUser />,
    },
];

export default routes;