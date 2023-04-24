import Link from "next/link";
import styles from "../styles/Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a>About</a>
            </Link>
          </li>
          <li>
            <a href="https://twitter.com/my-twitter-account" target="_blank" rel="noopener noreferrer">
              Twitter
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/my-facebook-page" target="_blank" rel="noopener noreferrer">
              Facebook
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}