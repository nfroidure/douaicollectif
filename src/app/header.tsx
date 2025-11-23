import styles from "./header.module.scss";
import { qualifyPath } from "../utils/markdown";
import Link from "next/link";
import { ORGANISATION_NAME } from "@/utils/constants";
import Content from "./content";

export default function Header({
  backgroundImage = "/public/illustrations/scarpe-douai.jpg",
  backgroundPositionX = "center",
  backgroundPositionY = "-500px",
}: {
  backgroundImage?: string;
  backgroundPositionX?: "left" | "center" | "right" | string;
  backgroundPositionY?: "top" | "center" | "bottom" | string;
}) {
  return (
    <header className={styles.root}>
      <div className={[styles.strip, styles.top].join(" ")}>
        <Content>
          <p>Élections municipales de Douai des 15 & 22 mars 2026</p>
        </Content>
      </div>
      <div
        className={styles.hero}
        style={{
          backgroundImage: `url("${qualifyPath(backgroundImage)}")`,
          backgroundPositionX: backgroundPositionX,
          backgroundPositionY: backgroundPositionY,
        }}
      >
        <Content>
          <Link href="/" className={styles.logo}>
            <span>{ORGANISATION_NAME}</span>
          </Link>
        </Content>
      </div>
      <div className={[styles.strip, styles.bottom].join(" ")}>
        <Content>
          <p>Pour une ville Citoyenne, Écologique et Solidaire</p>
        </Content>
      </div>
    </header>
  );
}
