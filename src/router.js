import { createBrowserRouter } from "react-router-dom";

import App from "./App";
import AllPeople from "./components/People/AllPeople";
import PersonDetailsPage from "./components/People/PersonDetailsPage";



const router = createBrowserRouter([
    { path: '', element: <App/> },
    { path: '/people', element:<AllPeople/>},
    { path: '/people/:uid', element:<PersonDetailsPage/>},
  
]);

export default router;