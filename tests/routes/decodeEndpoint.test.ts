import request from "supertest";
import app from "../../src/index";
import { shortDomain, urlInMemoryDatabase } from "../../src/utils/contants";
describe("should test /decode enpoint", () => {
  it("should get the original url and return 200", async () => {
    const uniqueCode = "aHR0cH";
    const orinalURL = "https://www.finn.com/de-DE/subscribe?campaign=autoabo&utm_source=google&utm_medium=cpc&utm_campaign=SB|DE|P|Subs|Intent|FINN&gad_source=1&gclid=CjwKCAiA8Lu9BhA8EiwAag16b3--hoLy9VNckCpZ--O0oD9kHYseSKNlHFek3L5WtD1tnH1RyA7KgBoCtksQAvD_BwE";
    urlInMemoryDatabase.set(uniqueCode, orinalURL);
    const response = await request(app)
      .get("/decode")
      .send({ url: `${shortDomain}${uniqueCode}` });
    expect(response.statusCode).toEqual(200);
    expect(urlInMemoryDatabase.get(uniqueCode)).toEqual(orinalURL)
  });
  it("should return not found with code 404, when decoding an URL that is not in Memory", async () => {
    const response = await request(app)
      .get("/decode")
      .send({ url: "http://urlnotinmemory.com" });
    expect(response.statusCode).toEqual(404);
  });
  it("should return Bad Request when trying to decode a not valid URL", async () => {
    const response = await request(app)
      .get("/decode")
      .send({ url: "NOT_VALID_URL" });
    expect(response.statusCode).toEqual(400);
  });
});

