export const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH;
// For future use: https://stackoverflow.com/questions/76691710/custom-metadata-depending-on-the-language-in-next-js
export const LANGUAGE = "fr";
export const LOCALE = "fr-FR";
export const TIME_ZONE = "Europe/Paris";
// The `BUILD_YEAR` env var is always set via NextJS config
export const BUILD_YEAR = parseInt(process.env.BUILD_YEAR as string, 10);
export const ASSET_PREFIX = `${BASE_URL}${BASE_PATH || ""}`;
export const ORGANISATION_LEGAL_NAME = "Douai Collectif";
export const ORGANISATION_NAME = "Douai Collectif";
export const ORGANISATION_ADDRESS = "Douai";
export const ORGANISATION_CONTACT = "contact@douai-collectif.fr";
export const ORGANISATION_PRIMARY_COLOR = "#a6cc1d";
export const PUBLISHER = "Nicolas Froidure";
export const DOMAIN_NAME = "douai-collectif.fr";
export const MASTODON_ACCOUNT = "douaicollectif";
export const MASTODON_ACCOUNT_ID = "115588760858818956";
export const MASTODON_SERVER = "piaille.fr";
export const FACEBOOK_ACCOUNT = "douaicollectif";
export const BLUESKY_ACCOUNT = "douaicollectif";
export const BLUESKY_SERVER = "bsky.social";
export const BLUESKY_APP = "bsky.app";
