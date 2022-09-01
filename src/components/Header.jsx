import styles from "../styles/components/Header.module.css";

export default function Header() {
  return (
    <header className={styles.event}>
      <div className={styles.disclaimer}>
        <h2>InDecor</h2>
        <p className={styles.about}>
          Um evento para revolucionar a sua criatividade
        </p>
        <p>Data do evento:</p>
        <p className={styles.date}>Domingo, 30 de Maio, a partir das 14h</p>
      </div>
      <div className={styles.form}>
        <p>Preencha o formulário para receber os detalhes do evento</p>
        <form>
          <div className={styles.form_group}>
            <label for="name">Nome</label>
            <input type="text" placeholder="Digite seu nome" />
          </div>
          <div class={styles.form_group}>
            <label for="email">E-mail</label>
            <input type="email" placeholder="Digite seu melhor e-mail" />
          </div>
          <div class={styles.form_group}>
            <label for="phone">Telefone</label>
            <input type="text" placeholder="Número de Whatsapp" />
          </div>
          <div class={styles.form_group}>
            <label for="interest">Principal interesse</label>
            <select name="interest">
              <option value="" disabled selected>
                Selecione
              </option>
              <option value="apartment">Apartamentos</option>
              <option value="house">Casas</option>
              <option value="garden">Jardins</option>
              <option value="other">Outro</option>
            </select>
          </div>
          <input type="submit" class={styles.btn} value="Quero me inscrever" />
        </form>
      </div>
    </header>
  );
}
