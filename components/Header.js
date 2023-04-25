import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.container}>
      {/* <div className={styles.logoContainer}> */}
      <div className={styles.logo}>Ingredivert</div>
      <p className={styles.slug}>
        &quot;Your trusty unit converting tool!&quot;
      </p>
      {/* </div> */}
    </header>
  );
}
