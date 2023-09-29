import { useEffect, useState } from "react";
import "./App.css";
import { Navbar, Container, Loading } from "./Components";
import { MyContext } from "./Context";
import jwtDecode from "jwt-decode";
import { ToastContainer } from "react-toastify";
import { Outlet } from "react-router-dom";
import axios from "axios";

function App() {
  const [user, setUser] = useState(null);
  const [isModal, setIsModal] = useState(false);
  const [load, setload] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    window.addEventListener("load", function () {
      setload(true);
    });

    if (localStorage.getItem("userToken")) {
      const token = localStorage.getItem("userToken");
      let userdata = null;
      async function fetchData() {
        setIsLoading(true);
        const decodedUserData = await jwtDecode(token);
        userdata = await axios(
          `http://localhost:5000/getOneUser/${decodedUserData.id}`
        );
        setUser(userdata.data.user);
        setIsLoading(false);
      }
      fetchData();
    }
  }, [localStorage.getItem("userToken")]);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <MyContext.Provider value={{ user, isModal, setIsModal, load }}>
          <Container>
            <Navbar />
          </Container>
          <Outlet />
          <ToastContainer />
        </MyContext.Provider>
      )}
    </>
  );
}

export default App;
