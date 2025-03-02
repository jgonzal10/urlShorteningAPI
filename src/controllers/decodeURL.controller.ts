import { NextFunction, Request, Response } from "express";
import { decodeURL as decode } from "../utils/decodeURL";
import { shortDomain, urlInMemoryDatabase } from "../utils/contants";
import { logger } from "../utils/logger";
import { isValidURL } from "../utils/isValidURL";

export const decodeURL = (req: Request, res: Response, next: NextFunction) => {
  const shortenedURL = req.body.url;
  if (isValidURL(shortenedURL) && shortenedURL) {
    try {
      const originalURL = decode(
        shortenedURL,
        urlInMemoryDatabase,
        shortDomain,
      );
      if (originalURL) {
        logger.info("Successfully decoded URL");
        res.status(200).json({ originalURL });
      } else {
        logger.error("Error while trying to decode URL");
        res.status(404).json({ error: "URL not found" });
      }
    } catch (error) {
      next(error);
    }
  } else {
    logger.error("There is something wrong with the URL");
    res.status(400).json({ error: "Bad Request" });
  }
};
