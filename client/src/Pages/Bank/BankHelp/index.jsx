import React, { useState } from "react";
import style from "./style.module.css";
import { Container } from "../../../Components";

export default function Index() {
  const [panel, setPanel] = useState(1);

  return (
    <Container className={style.container}>
      <div className={style.links}>
        <div
          style={{
            background: panel == 1 && "#f27a1a",
            color: panel == 1 && "#fff",
          }}
          className={style.link}
          onClick={() => setPanel(1)}
        >
          Milliön
        </div>
        <div
          style={{
            background: panel == 2 && "#f27a1a",
            color: panel == 2 && "#fff",
          }}
          className={style.link}
          onClick={() => setPanel(2)}
        >
          eManat
        </div>
        <div
          style={{
            background: panel == 3 && "#f27a1a",
            color: panel == 3 && "#fff",
          }}
          className={style.link}
          onClick={() => setPanel(3)}
        >
          m10
        </div>
      </div>
      {panel == 1 && (
        <div className={style.panel}>
          <ul>
            <li>
              <span>18 yaşı tamam</span> olmamış şəxslərin{" "}
              <span>valideyn icazəsi </span>
              olmadan saytımızdan istifadə etməsi <span>qadağandır!</span> Əks
              halda <span>lotaz.com</span> heç bir{" "}
              <span>məsuliyyət daşımır.</span>
            </li>
          </ul>

          <h1>MilliÖN ilə lotaz.com'a ödəniş forması :</h1>
          <ul>
            <li>
              <span>MilliÖN</span> terminalına yaxınlaşın.
            </li>
            <li>
              Ekranda görsənən " <span>m10</span> " loqotipinə klikləyin.
            </li>
            <li>
              Nömrə yerinə " <span>+994 55 555 55 55</span> " yazın.
            </li>
            <li>
              İrəli seçin və məbləği daxil edin. Qəbzin şəklini bizə göndərin. .
            </li>
          </ul>

          <section>
            <p>❗ Sifariş tamamlanana kimi qəbzi özünüzdə saxlayın.</p>
            <p>❗ Qəbz gün ərzində bizə göndərilməlidir.</p>
          </section>
        </div>
      )}
      {panel == 2 && (
        <div className={style.panel}>
          <ul>
            <li>
              <span>18 yaşı tamam</span> olmamış şəxslərin{" "}
              <span>valideyn icazəsi </span>
              olmadan saytımızdan istifadə etməsi <span>qadağandır!</span> Əks
              halda <span>lotaz.com</span> heç bir{" "}
              <span>məsuliyyət daşımır.</span>
            </li>
          </ul>

          <h1>eManat ilə lotaz.com'a ödəniş forması :</h1>
          <ul>
            <li>
              <span>eManat</span> terminalına yaxınlaşın.
            </li>
            <li>
              <span>Mpay</span> xidmətini seçin.
            </li>
            <li>
              Nömrə yerinə " <span>+994 55 555 55 55</span> " yazın.
            </li>
            <li>
              İrəli seçin və məbləği daxil edin. Qəbzin şəklini bizə göndərin. .
            </li>
          </ul>

          <section>
            <p>❗ Sifariş tamamlanana kimi qəbzi özünüzdə saxlayın.</p>
            <p>❗ Qəbz gün ərzində bizə göndərilməlidir.</p>
          </section>
        </div>
      )}
      {panel == 3 && (
        <div className={style.panel}>
          <ul>
            <li>
              <span>18 yaşı tamam</span> olmamış şəxslərin{" "}
              <span>valideyn icazəsi </span>
              olmadan saytımızdan istifadə etməsi <span>qadağandır!</span> Əks
              halda <span>lotaz.com</span> heç bir{" "}
              <span>məsuliyyət daşımır.</span>
            </li>
          </ul>

          <h1>M10 mobil tədbiqi ilə dolphgame.com'a ödəniş forması :</h1>
          <ul>
            <li>
              "<span>m10</span>" tətbiqinə daxil olun.
            </li>
            <li>
              "<span>m10 - a köçürmə </span>" sözünə toxunun.
            </li>
            <li>
              Nömrə yerinə " <span>+994 55 555 55 55</span> " yazın.
            </li>
            <li>Ödəniş edib elektron qəbzin şəkilini bizə göndərin</li>
          </ul>

          <section>
            <p>❗ Sifariş tamamlanana kimi qəbzi özünüzdə saxlayın.</p>
            <p>❗ Qəbz gün ərzində bizə göndərilməlidir.</p>
          </section>
        </div>
      )}
    </Container>
  );
}
