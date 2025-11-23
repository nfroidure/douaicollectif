import styles from "./footer.module.scss";
import Link from "next/link";
import Social from "./social";
import { ORGANISATION_NAME } from "../utils/constants";
import Content from "./content";

export default function Footer() {
  return (
    <footer className={styles.root}>
      <Content>
        <div className={styles.bottom}>
          <p>
            <span>© {ORGANISATION_NAME} - Tous droits réservés</span> -{" "}
            <Link href="/mentions-legales">Mentions légales</Link>
          </p>
          <Social />
        </div>
      </Content>
    </footer>
  );
}
