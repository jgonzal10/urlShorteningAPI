import { encodeURL } from "../../src/utils/encodeURL";
import { shortDomain, urlInMemoryDatabase } from "../../src/utils/contants";

describe("encode URL", () => {
  const orinalURL = "https://codesubmit.io/library/react";
  it("should return a shortend url", () => {
    const uniqueCode = Buffer.from(orinalURL).toString("base64").slice(0, 6);
    const result = encodeURL(orinalURL, urlInMemoryDatabase, shortDomain);
    expect(result).toEqual(`${shortDomain}${uniqueCode}`);
  });

  it("should return an error Message ", () => {
    const notValidURL = "not_valid_url";
    const result = encodeURL(notValidURL, urlInMemoryDatabase, shortDomain);
    expect(result).toEqual(new Error("This is not a valid URL"));
  });

  it("should check if the in memory database has the values for the shortened url and the original url ", () => {
    const uniqueCode = Buffer.from(orinalURL).toString("base64").slice(0, 6);
    encodeURL(orinalURL, urlInMemoryDatabase, shortDomain);
    const isURLInMemory = urlInMemoryDatabase.has(uniqueCode);
    expect(isURLInMemory).toEqual(true);
  });
});
