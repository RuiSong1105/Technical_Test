import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from "./routes/root";
import ErrorPage from "./error-page";
import London from "./routes/London";
import Paris from "./routes/Paris";
import Rome from "./routes/Rome";
import "./index.css";

function getTime(dateTime) {
  var date = new Date(dateTime);
  var y = date.getFullYear();
  var m = date.getMonth() + 1;
  m = m < 10 ? ("0" + m) : m;
  var d = date.getDate();
  d = d < 10 ? ("0" + d) : d;
  var h = date.getHours();
  var ampm = h >= 12 ? "pm" : "am";
  h %= 12;
  var min = date.getMinutes();
  min = min < 10 ? ("0" + min) : min;
  var sec = date.getSeconds();
  sec = sec < 10 ? ("0" + sec) : sec;
  var time = y + '-' + m + "-" + d + " " + h + ":" + min + ":" + sec + ampm;
  return time;
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "London",
        element: <London getTime={getTime} />,
      },
      {
        path: "Paris",
        element: <Paris getTime={getTime} />,
      },
      {
        path: "Rome",
        element: <Rome getTime={getTime} />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);