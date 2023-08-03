import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom/dist";
import "./index.css";

import App from "./App";
import SavedBooks from "./pages/SavedBooks";
import SearchBooks from "./pages/SearchBooks";
import Login from "./components/LoginForm";
import SignupForm from "./components/SignupForm";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <SignupForm />,
      },
      {
        path: "/books",
        element: <SavedBooks />,
      },
      {
        path: "/books/:bookId",
        element: <SearchBooks />,
      },
    ],
  },
]);

console.log(document.getElementById("root"));

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
