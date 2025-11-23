import { type ReactNode } from "react";
import styles from "./content.module.scss";

export default function Content({ children }: { children: ReactNode }) {
  return <div className={styles.root}>{children}</div>;
}
