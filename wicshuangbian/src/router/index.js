import { Navigate } from "react-router-dom";
import List from "../page/list/list.jsx";
import ListDetails from "../page/list/listDetails.jsx";
export const routes = [
  {
    path: "/",
    element: <Navigate to="/list" />,
    children: [
      { path: "list", element: <List /> },
      { path: "list/listDetail", element: <ListDetails /> },
    ],
  },
];
