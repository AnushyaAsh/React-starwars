import { createBrowserRouter } from "react-router-dom";

import App from "./App";
import ViewPost from "./components/People/ViewPeople";

const router = createBrowserRouter([
    { path: '', element: <App/> },
    { path: '/people', element:<ViewPost/>},
  
]);

export default router;