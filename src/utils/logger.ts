import { getLogger, configure } from "log4js";

configure({
  appenders: {
    console: { type: "console" },
  },
  categories: {
    default: {
      appenders: ["console"],
      level: "all",
    },
  },
});
export const logger = getLogger();
