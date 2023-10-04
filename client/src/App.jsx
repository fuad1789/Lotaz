import { useEffect, useState } from "react";
import "./App.css";
import { Navbar, Container, Loading } from "./Components";
import { MyContext } from "./Context";
import jwtDecode from "jwt-decode";
import { Toaster } from "react-hot-toast";
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
      async function fetchData() {
        setIsLoading(true);
        const decodedUserData = await jwtDecode(token);
        await axios(
          `https://lotaze.onrender.com/auth/getOneUser/${decodedUserData?.id}`
        )
          .then((res) => {
            setUser(res.data.user);
            console.log(res.data.user);
          })
          .finally(() => {
            setIsLoading(false);
          });
      }
      if (token) {
        fetchData();
      } else {
      }
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
          <Toaster
            position="top-center"
            containerStyle={{ fontSize: "1.2em" }}
          />
        </MyContext.Provider>
      )}
    </>
  );
}

export default App;
