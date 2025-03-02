import { Buffer } from "buffer";
import { isValidURL } from "./isValidURL";

export const encodeURL = (
  originalURL: string,
  database: Map<string, string>,
  shortDomain: string,
): string | Error => {
  if (isValidURL(originalURL) && originalURL) {
    const originalURLBase64 = Buffer.from(originalURL).toString("base64");
    let uniqueCode = originalURLBase64.slice(0, 6);
    const shortenedURL = `${shortDomain}${uniqueCode}`;
    let collisionCounter = 0;
    // Check for collision or if the unicode already exists, if the code already exist then create a new one
    while (database.has(uniqueCode)) {
      collisionCounter++;
      const newUniqueCode = originalURLBase64.slice(0, 6 + collisionCounter);
      uniqueCode = newUniqueCode;
    }

    database.set(uniqueCode, originalURL);
    return shortenedURL;
  } else {
    return new Error("This is not a valid URL");
  }
};
