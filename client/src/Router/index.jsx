import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import Help from "../Pages/Help";
import BankTransfer from "../Pages/Bank/Banktransfer";
import BankHelp from "../Pages/Bank/BankHelp";
import Banks from "../Pages/Bank";
import User from "../Pages/userPanel";
import Profile from "../Pages/userPanel/Profile";
import Notfications from "../Pages/userPanel/Notfications";
import Payments from "../Pages/userPanel/Payments";
import Tickets from "../Pages/userPanel/Tickets";
import { Container } from "../Components";
import { MyContext } from "../Context";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: (
          <Container>
            <Home />
          </Container>
        ),
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "help",
        element: <Help />,
      },
      {
        path: "banks",
        element: <Banks />,
        children: [
          {
            path: "banktransfer",
            element: <BankTransfer />,
          },
          {
            path: "help",
            element: <BankHelp />,
          },
        ],
      },
      {
        path: "user",
        element: <User />,
        children: [
          {
            path: "profile",
            element: <Profile />,
          },
          {
            path: "notfications",
            element: <Notfications />,
          },
          {
            path: "payments",
            element: <Payments />,
          },
          {
            path: "tickets",
            element: <Tickets />,
          },
        ],
      },
    ],
  },
]);

export { routes };
