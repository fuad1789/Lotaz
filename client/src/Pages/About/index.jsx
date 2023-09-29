import React from "react";
import style from "./style.module.css";
import { Container } from "../../Components";

export default function Index() {
  return (
      <Container className={style.aboutContainer}>
        <div className={style.container}>
          <div className={style.header}>Haqqımızda</div>
          <div className={style.about}>
            <p>
              <h1>• Biz Kimik</h1>
              LOTAZ komandası olaraq uzun illərin təcrübəsi və lotereya həvəsi
              ilə sizə xidmət edirik. Yarandığımız gündən bəri minlərlə insana
              şanslarını sınamağa kömək etmişik və qalibləri mükafatlandırmaqdan
              həzz almışıq. Şirkətimizin korporativ heyyəti ilə bu sektordakı
              təcrübəmizi əks etdirir və sizə əminlik verir. Ofisimiz bu maraqlı
              səyahətə başlayan komanda ilə doludur və biz sizinlə daha çox
              qalibləri görməyi səbirsizliklə gözləyirik.
            </p>
          </div>
          <div className={style.about}>
            <p>
              <h1>• Mehsullarımız</h1>
              Saytımızda təklif olunan məhsullar sizə böyük hədiyyələr qazanmaq
              şansı verir. Hər bir məhsul maraqlı lotereya oyununu təmsil edir.
              Lotereya bileti almaqla siz bu oyunları oynaya və böyük hədiyyələr
              qazanmaq şansına sahib ola bilərsiniz. Bizim Lotereya oyunlarımız
              sizə maraqlı anlar yaşamağınız və böyük hədiyyələr qazanmağınız
              üçün nəzərdə tutulub.
            </p>
          </div>
          <div className={style.about}>
            <p>
              <h1>• Güvənli Təcrübə</h1>
              Sizin təhlükəsizliyiniz bizim əsas prioritetimizdir. Veb saytımız
              ən son təhlükəsizlik tədbirləri ilə qorunur və məlumatlarınızın
              təhlükəsizliyini təmin etmək üçün daim yenilənir. Biz sizin
              məxfiliyinizə hörmət edirik və şəxsi məlumatlarınızı ciddi şəkildə
              qoruyuruq. Beləliklə, saytımızda oyun oynayarkən və mükafatlar
              qazanarkən özünüzü tamamilə təhlükəsiz hiss edə bilərsiniz.
            </p>
          </div>
          <div className={style.about}>
            <p>
              <h1>• Dəstək və İstifadəçi Xidmətləri</h1>
              Suallarınız olduqda və ya köməyə ehtiyacınız olduqda, təcrübəli
              dəstək komandamız həmişə sizin üçün buradadır. İstifadəçi
              məmnuniyyəti bizim prioritetimizdir və biz sizə hər addımda kömək
              etməkdən məmnunuq. Müştəri xidmətimiz hər hansı sualınız və ya
              problemləriniz tez bir zamanda həllini təmin etmək üçün buradadır.
            </p>
          </div>
          <div className={style.about}>
            <p>
              <h1>• Bizə Qoşulun</h1>
              Qaliblərimiz arasında olmaq üçün bizə qoşula bilərsiniz. Saytımıza
              qoşulmaqla siz möhtəşəm hədiyyələr qazanmaq şansı əldə edə
              bilərsiniz. Qaliblərimiz bizim üçün xüsusidir və biz bu
              nailiyyətləri sizinlə qeyd etməkdən məmnunuq. Gəlin daha çox
              qələbə qazanaq və birlikdə şansları sınayaq!
            </p>
          </div>
        </div>
      </Container>
  );
}
