import React from "react";
import { Card } from "../../Components";

export default function Index({ haveticket, data }) {
  return (
    <div className="card-items">
      {data.map((ticket) => (
        <Card
          key={ticket._id}
          haveticket={haveticket}
          id={ticket._id}
          productPrice={ticket.ProductPrice}
          productCount={ticket.count}
          createdAt={ticket.createdAt}
          img={ticket.img}
          ticketPrice={ticket.ticketPrice}
          ticketCount={ticket.ticketCount}
          title={ticket.title}
          soldTicketCount={ticket.soldTicketCount}
          buyers={ticket.buyers}
        />
      ))}
    </div>
  );
}
