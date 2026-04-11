import styles from './footer.module.css';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <a href='#' className={styles.footerLink}>
        Understand how the Pomodoro Technique works
      </a>
      <p>Chronos Pomodoro &copy; {new Date().getFullYear()} - Kauã Souza</p>
    </footer>
  );
}
