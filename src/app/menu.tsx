"use client";

import styles from "./menu.module.scss";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const MENU_ITEMS = [
  {
    href: "/",
    label: "Accueil",
    title: "Revenir à l’accueil",
  },
  {
    href: "/valeurs-et-principes",
    label: "Valeurs",
    title: "Découvrir les valeurs de notre collectif",
  },
  {
    href: "/programme",
    label: "Programme",
    title: "Découvrir notre programme",
  },
  {
    href: "/actualites",
    label: "Actualités",
    title: "Lire les actualités",
  },
  {
    href: "/faq",
    label: "FAQ",
    title: "Lire mes questions/réponses",
  },
  {
    href: "/agenda",
    label: "Agenda",
    title: "Voir les prochain évènements importants",
  },
];

export default function Menu() {
  const pathname = usePathname();
  const [popinIsVisible, setPopinIsVisible] = useState(false);

  return (
    <div className={styles.root}>
      <nav>
        {MENU_ITEMS.map(({ href, label, title }) => (
          <Link
            key={href}
            href={href}
            className={[
              ...(href === pathname ||
              ("/" !== href && pathname.startsWith(href))
                ? [styles.selected]
                : []),
            ].join(" ")}
            title={title}
          >
            <span className={styles.icon} />
            <span className={styles.label}>{label}</span>
          </Link>
        ))}
      </nav>
    </div>
  );
}
