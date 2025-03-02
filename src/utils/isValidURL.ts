import { logger } from "./logger";

export const isValidURL = (url: string): boolean => {
  try {
    new URL(url);
    logger.info("The URL is valid");

    return true;
  } catch (error) {
    logger.error("Invalid URL");

    return false;
  }
};
