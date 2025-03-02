import request from "supertest";
import app from "../../src/index";
describe("should test /encode enpoint", () => {
  it("should return status code 200 and the shortened url", async () => {
    const response = await request(app)
      .post("/encode")
      .send({
        url: "https://www.finn.com/de-DE/subscribe?campaign=autoabo&utm_source=google&utm_medium=cpc&utm_campaign=SB|DE|P|Subs|Intent|FINN&gad_source=1&gclid=CjwKCAiA8Lu9BhA8EiwAag16b3--hoLy9VNckCpZ--O0oD9kHYseSKNlHFek3L5WtD1tnH1RyA7KgBoCtksQAvD_BwE",
      });
    expect(response.statusCode).toEqual(200);
  });
  it("should return Bad Request when trying to encode a not valid URL", async () => {
    const response = await request(app)
      .post("/encode")
      .send({ url: "NOT_VALID_URL" });
    expect(response.statusCode).toEqual(400);
  });
});
