import Link from "next/link";
import styles from "./a.module.scss";
import { type ComponentProps } from "react";

export default function Anchor({
  children,
  href,
  className,
  icon,
  iconPosition = "first",
  target = "_self",
  ...props
}: {
  icon?: string;
  iconPosition?: "first" | "last";
} & Exclude<ComponentProps<typeof Link>, "href"> & {
    title: string;
  }) {
  return (
    <Link
      {...{
        href,
      }}
      className={[
        styles.root,
        ...(className ? [className] : []),
        ...(icon
          ? [iconPosition === "first" ? styles.first : styles.last]
          : []),
      ].join(" ")}
      {...props}
      target={href.toString().startsWith("http") ? "_blank" : target}
    >
      {icon ? <span className={styles.icon} /> : null}
      {children}
    </Link>
  );
}
