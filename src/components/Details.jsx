import styles from "../styles/components/Details.module.css";
import Image from "next/image";
import Image01 from "../img/hrz-3.jpg";
import Image02 from "../img/hrz-4.jpg";
import Image03 from "../img/hrz-5.jpg";

export default function Details() {
  return (
    <section className={styles.details}>
      <div className={styles.detail} id={styles.detail_1}>
        <Image src={Image01} className={styles.img} />
        <div className={styles.detail_description}>
          <h3>Conheça os ambientes que você vai aprender a decorar</h3>
        </div>
      </div>
      <div className={styles.detail} id={styles.detail_2}>
        <div className={styles.detail_description}>
          <h3>Detalhes</h3>
          <ul>
            <li>Posicionamento</li>
            <li>Aproveitamento de espaço</li>
            <li>Combinação de cores</li>
            <li>Organização</li>
            <li>E muito mais...</li>
          </ul>
        </div>
        <Image src={Image02} />
      </div>
      <div className={styles.detail} id={styles.detail_3}>
        <Image src={Image03} />
        <div className={styles.detail_description}>
          <h3>Objetos</h3>
          <ul>
            <li>Cadeiras</li>
            <li>Mesas</li>
            <li>Espelhos</li>
            <li>Plantas</li>
            <li>Cortinas</li>
            <li>E muito mais...</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
