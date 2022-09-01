import styles from "../styles/components/Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <h3>InDecor</h3>
      <p>A evolução da decoração de interiores</p>
      <p>
        <span>Entre em contato:</span> oi@indecor.com.br
      </p>
      <p>
        <span>Ou pelo telefone:</span> (55)99990-9999
      </p>
    </footer>
  );
}
