import { isValidURL } from "./isValidURL";

export const decodeURL = (
  shortenedURL: string,
  database: Map<string, string>,
  shortDomain: string,
): string | null | Error => {

    const shortCode = shortenedURL.replace(shortDomain, "");
    const originalURL = database.get(shortCode);
    return originalURL || null;
};
