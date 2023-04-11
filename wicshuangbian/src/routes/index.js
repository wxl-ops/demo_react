import { Navigate } from "react-router-dom";
import List from "../page/List/index.jsx";
import ListDetails from "../page/ListDetails/index.jsx";
export const routes = [
  {
    path: "/",
    element: <Navigate to="/list" />,
  },
  { path: "/list", element: <List /> },
  { path: "/list/listDetails/:id", element: <ListDetails /> },
];
