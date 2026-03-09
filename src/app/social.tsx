import styles from "./social.module.scss";
import {
  BLUESKY_ACCOUNT,
  BLUESKY_APP,
  BLUESKY_SERVER,
  FACEBOOK_ACCOUNT,
  INSTAGRAM_ACCOUNT,
  MASTODON_ACCOUNT,
  MASTODON_SERVER,
  YOUTUBE_ACCOUNT,
} from "../utils/constants";

export default function Social() {
  return (
    <nav className={styles.root}>
      <ul>
        <li className={styles.mastodon}>
          <a
            href={`https://${MASTODON_SERVER}/@${MASTODON_ACCOUNT}`}
            rel="me"
            title="Nous suivre sur Mastodon"
            target="_blank"
          >
            <span>Mastodon</span>
          </a>
        </li>
        <li className={styles.bluesky}>
          <a
            href={`https://${BLUESKY_APP}/profile/${BLUESKY_ACCOUNT}.${BLUESKY_SERVER}`}
            rel="me"
            title="Nous suivre sur Bluesky"
            target="_blank"
          >
            <span>Bluesky</span>
          </a>
        </li>
        <li className={styles.facebook}>
          <a
            href={`https://facebook.com/${FACEBOOK_ACCOUNT}`}
            rel="me"
            title="Nous suivre sur Facebook"
            target="_blank"
          >
            <span>Facebook</span>
          </a>
        </li>
        <li className={styles.youtube}>
          <a
            href={`https://youtube.com/@${YOUTUBE_ACCOUNT}`}
            rel="me"
            title="Nous suivre sur YouTube"
            target="_blank"
          >
            <span>YouTube</span>
          </a>
        </li>
        <li className={styles.instagram}>
          <a
            href={`https://instagram.com/${INSTAGRAM_ACCOUNT}`}
            rel="me"
            title="Nous suivre sur instagram"
            target="_blank"
          >
            <span>Instagram</span>
          </a>
        </li>
        <li className={styles.feed}>
          <a
            href="/actualites.atom"
            title="S’abonner aux mises à jour"
            target="_blank"
          >
            <span>Flux de syndication</span>
          </a>
        </li>
      </ul>
    </nav>
  );
}
