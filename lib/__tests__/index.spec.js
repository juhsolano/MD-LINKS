const mdLinks = require("../index.js");

describe("mdLinks", () => {
  it("Is a function", () => {
    expect(typeof mdLinks).toBe("function");
  });

  it("list the md files links and text description", () => {
    return expect(mdLinks("./lib/__tests__/text-test.md")).resolves.toStrictEqual([
      {
        href: "https://pt.wikipedia.org/wiki/Markdown",
        text: "Markdown",
      },
      {
        href: "https://nodejs.org/",
        text: "Node.js",
      },
      {
        href: "https://user-images.githubusercontent.com/110297/42118443-b7a5f1f0-7bc8-11e8-96ad-9cc5593715a6.jpg",
        text: "md-links",
      },
      {
        href: "https://nodejs.org/pt-br/",
        text: "Node.js",
      },
      {
        href: "https://developers.google.com/v8/",
        text: "Chrome",
      },
    ]);
});
  it("Wrong path", () => {
    return expect(mdLinks("")).rejects.toStrictEqual("Caminho não encontrado");
  });

  it("testing error", () => {
    return expect(mdLinks("<dir>")).rejects.toMatch("err");
  });
});
