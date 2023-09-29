import React from "react";
import style from "./style.module.css";
import { Container } from "../../Components";
import Disclosure from "./Disclosure";

export default function Index() {
  return (
    <div>
      <Container className={style.helpContainer}>
        <Container>
          <div className={style.header}>Yardım</div>
          <div className={style.disclosureCon}>
            <h1>Suallar və cavablar</h1>
            <div className={style.disclosurs}>
              <Disclosure
                title={"S: Lotereya nədir?"}
                content={
                  "C: Lotereya şansa əsaslanan oyun növüdür. İştirakçılar müəyyən bir nömrə və ya kombinasiya seçir və sonra çəkilişin nəticəsini gözləyirlər. Qaliblər böyük hədiyyələr qazanırlar."
                }
              />
              <Disclosure
                title={"S: Lotereya oyunlarında necə iştirak edə bilərəm?"}
                content={
                  "C: Lotereya oyunlarında iştirak etmək üçün saytımıza daxil olun, istədiyiniz oyunu seçin və biletinizi alın. Lotereya nəticələrini izləyin və qalib olmaq şansını əldə edin."
                }
              />
              <Disclosure
                title={"S: Ödəniş üsulları hansılardır?"}
                content={
                  "C: Ödəniş üsullarına kartdan karta, M10 köçürməsi və digər onlayn ödəniş seçimləri daxildir. Ödəniş seçimlərimizi nəzərdən keçirmək üçün hesabınıza daxil olun."
                }
              />
              <Disclosure
                title={"S: Mən qazandığım mükafatı necə tələb edə bilərəm?"}
                content={
                  "C: Qazandığınız mükafatı veb saytımızda avtomatik olaraq hesabınıza yatıracağıq. Qazandığınızı bildikdən sonra mükafatınızı geri götürmək və ya geri almaq üçün təlimatlarımıza əməl edin."
                }
              />
              <Disclosure
                title={"S: Mən necə kömək və dəstək ala bilərəm?"}
                content={
                  "Cavab: Hər hansı bir sualınız və ya probleminiz varsa, müştəri dəstək komandamızla əlaqə saxlaya bilərsiniz. Yardım üçün sorğularınızı əlaqə forması və ya whatsapp söhbət vasitəsilə göndərə bilərsiniz."
                }
              />
              <Disclosure
                title={"S: Veb saytınız təhlükəsizdirmi?"}
                content={
                  "C: Bəli, saytımız təhlükəsizdir. Şəxsi məlumatlarınızı və ödənişlərinizi qorumaq üçün ən son təhlükəsizlik tədbirlərindən istifadə edirik. Məxfiliyinizə hörmət edirik və məlumatlarınızı təhlükəsiz saxlayırıq"
                }
                border={false}
              />
            </div>
          </div>
        </Container>
      </Container>
    </div>
  );
}
