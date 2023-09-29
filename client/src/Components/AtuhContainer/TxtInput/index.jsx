import React from "react";
import style from "./style.module.css";

export default function Index({ Icon, placeholder, set, value }) {
  return (
    <div className={style.textInput}>
      {Icon && <Icon className={style.icon} size={24} />}

      <input
        value={value}
        onChange={(e) => set(e.target.value)}
        type="text"
        placeholder={placeholder}
        style={{
          paddingLeft: !Icon && "20px"
        }}
      />
    </div>
  );
}
