import React, { useEffect, useState } from "react";
import { OutlineFillButton, Poster, Cards } from "../../Components";
import axios from "axios";

export default function Index() {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    const getAllTicket = async () => {
      await axios("https://lotaze.onrender.com/ticket/getAllTickets").then(
        (res) => {
          setTickets(res.data.tickets);
        }
      );
    };

    getAllTicket();
  }, []);

  return (
    <>
      <Poster />
      <div className="buttonMenu">
        <OutlineFillButton txt={"Çəkilişlər"} isOutline={false} />
        <OutlineFillButton txt={"Çarxla qazan"} isOutline={true} />
      </div>
      <Cards data={tickets} />
    </>
  );
}
