import { NextFunction, Request, Response } from "express";
import { encodeURL as encode } from "../utils/encodeURL";
import { shortDomain, urlInMemoryDatabase } from "../utils/contants";
import { logger } from "../utils/logger";

export const encodeURL = (req: Request, res: Response, next: NextFunction) => {
  try {
    const originalURL = req.body.url;
    const shortenedURL: string | Error = encode(
      originalURL,
      urlInMemoryDatabase,
      shortDomain,
    );
    if (shortenedURL instanceof Error) {
      logger.error("Error while trying to encode URL");
      if (shortenedURL.message === "This is not a valid URL") {
        res.status(400).json({ error: "Bad request" });
      }
    } else {
      logger.info("Successfully encoded URL");
      res.status(200).json({ shortenedURL });
    }
  } catch (error) {
    next(error);
  }
};
