import style from "../style.module.css";

import { Disclosure } from "@headlessui/react";

export default function Index({ title, content, border = true }) {
  return (
    <div className={style.disclosure}>
      <Disclosure>
        <Disclosure.Button
          className={style.btn}
          style={{ borderBottomWidth: !border && 0 }}
        >
          {title}
        </Disclosure.Button>
        <Disclosure.Panel className={style.panel}>{content}</Disclosure.Panel>
      </Disclosure>
    </div>
  );
}
