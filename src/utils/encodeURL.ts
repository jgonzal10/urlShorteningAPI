import { Buffer } from "buffer";
import { isValidURL } from "./isValidURL";

export const encodeURL = (
  originalURL: string,
  database: Map<string, string>,
  shortDomain: string,
): string | Error => {
  if (isValidURL(originalURL) && originalURL) {
    const originalURLBase64 = Buffer.from(originalURL).toString("base64");
    const uniqueCode = originalURLBase64.slice(0, 6);
    const shortenedURL = `${shortDomain}${uniqueCode}`;

    database.set(uniqueCode, originalURL);
    return shortenedURL;
  } else {
    return new Error("This is not a valid URL");
  }
};
