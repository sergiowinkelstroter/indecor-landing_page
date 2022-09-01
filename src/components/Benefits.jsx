import styles from "../styles/components/Benefits.module.css";

export default function Benefits() {
  return (
    <section className={styles.key_benefits}>
      <h2>O que você vai aprender:</h2>
      <div className={styles.benefits}>
        <div className={styles.benefit}>
          <div className={styles.benefit_1} id={styles.benefit_img}></div>
          <p>
            Alguma coisa muito legal, que vai fazer a diferença na vida do
            participante.
          </p>
        </div>
        <div className={styles.benefit}>
          <div className={styles.benefit_2} id={styles.benefit_img}></div>
          <p>
            Alguma coisa muito legal, que vai fazer a diferença na vida do
            participante.
          </p>
        </div>
        <div className={styles.benefit}>
          <div className={styles.benefit_3} id={styles.benefit_img}></div>
          <p>
            Alguma coisa muito legal, que vai fazer a diferença na vida do
            participante.
          </p>
        </div>
      </div>
    </section>
  );
}
