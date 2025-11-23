import styles from "./supports.module.scss";
import Link from "next/link";
import Image from "next/image";
import Content from "./content";

export default function Supports() {
  return (
    <aside className={styles.root}>
      <Content>
        <p>
          Une démarche soutenue par&nbsp;:
          <br />
          <br />
          <Link
            href="https://lesecologistes.fr"
            title="Visiter les site des Écologistes"
          >
            <Image
              src="/images/logo-les-ecologistes.svg"
              alt="Les Écologistes du Douaisis"
              width={500}
              height={96}
            />
          </Link>
          <Link
            href="https://jeunes-ecologistes.org/"
            title="Visiter les site des Jeunes Écologistes"
          >
            <Image
              src="/images/logo-les-jeunes-ecologistes.svg"
              alt="Les Jeunes Écologistes du Bassin-Minier"
              width={500}
              height={96}
            />
          </Link>
        </p>
      </Content>
    </aside>
  );
}
