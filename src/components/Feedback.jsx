import styles from "../styles/components/Feedback.module.css";

export default function Feedback() {
  return (
    <section className={styles.cta}>
      <h3>Gostou? Então se inscreva:</h3>
      <button className={styles.btn}>Solicitar Inscrição</button>
    </section>
  );
}
