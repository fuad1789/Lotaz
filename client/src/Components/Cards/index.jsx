import React from "react";
import { Card } from "../../Components";

export default function Index({ haveticket }) {
  return (
    <div className="card-items">
      <Card haveticket={haveticket} />
      <Card haveticket={haveticket} />
      <Card haveticket={haveticket} />
      <Card haveticket={haveticket} />
      <Card haveticket={haveticket} />
      <Card haveticket={haveticket} />
    </div>
  );
}
