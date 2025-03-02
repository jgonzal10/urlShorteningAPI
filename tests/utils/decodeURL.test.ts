import { shortDomain, urlInMemoryDatabase } from "../../src/utils/contants";
import { decodeURL } from "../../src/utils/decodeURL";

describe("decode URL", () => {
  it("should return the original URL", () => {
    const uniqueCode = "aHR0cH";
    const orinalURL = "https://codesubmit.io/library/react";
    urlInMemoryDatabase.set(uniqueCode, orinalURL);
    const result = decodeURL(
      `${shortDomain}${uniqueCode}`,
      urlInMemoryDatabase,
      shortDomain,
    );
    expect(result).toEqual(orinalURL);
  });
  it("should return the null when not URL was found in Memory", () => {
    const notCodeInMemory = "notCodeInMemory";
    const result = decodeURL(
      `${shortDomain}${notCodeInMemory}`,
      urlInMemoryDatabase,
      shortDomain,
    );
    expect(result).toEqual(null);
  });
});
