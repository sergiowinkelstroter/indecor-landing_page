import styles from "../styles/components/Location.module.css";

export default function Locations() {
  return (
    <section className={styles.location}>
      <div className={styles.address}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="currentColor"
          class="bi bi-geo-alt-fill"
          viewBox="0 0 16 16"
        >
          <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
        </svg>
        <div className={styles.address_details}>
          <p>Rua do evento, 1333</p>
          <p>Bairro</p>
          <p>Abertura: 14h</p>
        </div>
      </div>
      <div className={styles.about_location}>
        <h3>Local de destaque</h3>
        <p>
          O evento será realizado em um local prestigiado pelos amantes de
          Design de Interiores, onde teremos exemplos de vários ambientes, tanto
          internos como externos.
        </p>
      </div>
    </section>
  );
}
