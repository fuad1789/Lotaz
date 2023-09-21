import { useEffect, useState } from "react";
import "./App.css";
import {
  Navbar,
  Poster,
  Container,
  OutlineFillButton,
  Card,
} from "./Components";
import { MyContext } from "./Context";
import jwtDecode from "jwt-decode";
import { ToastContainer } from "react-toastify";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (localStorage.getItem("userToken")) {
      const token = localStorage.getItem("userToken");
      const decodedUserData = jwtDecode(token);
      setUser(decodedUserData._doc);
    }
  }, [localStorage.getItem("userToken")]);

  return (
    <MyContext.Provider value={{ user }}>
      <Container value={user}>
        <Navbar />
        <Poster />
        <div className="buttonMenu">
          <OutlineFillButton txt={"Çəkilişlər"} isOutline={false} />
          <OutlineFillButton txt={"Çarxla qazan"} isOutline={true} />
        </div>
        <div className="card-items">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
        <ToastContainer />
      </Container>
    </MyContext.Provider>
  );
}

export default App;
