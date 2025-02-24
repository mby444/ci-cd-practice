const supertest = require("supertest");
const { app, server } = require("../index");

test("Should get Hello World! message", () => {
  const request = supertest(app);

  return request
    .get("/")
    .expect(200)
    .then((response) => {
      expect(response.body.message).toEqual("Hello World!");
    });
});

test("Should get hello message", () => {
  const request = supertest(app);

  return request
    .get("/John")
    .expect(200)
    .then((response) => {
      expect(response.body.message).toEqual("Hello John!");
    });
});

server.close();
