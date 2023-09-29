import React from "react";
import { OutlineFillButton, Poster, Cards } from "../../Components";

export default function Index() {
  return (
    <>
      <Poster />
      <div className="buttonMenu">
        <OutlineFillButton txt={"Çəkilişlər"} isOutline={false} />
        <OutlineFillButton txt={"Çarxla qazan"} isOutline={true} />
      </div>
      <Cards />
    </>
  );
}
