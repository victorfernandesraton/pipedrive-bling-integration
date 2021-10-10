import { parseToString } from "../BlingAdapter";

describe("BlingAdapter", () => {
  describe("parseToString", () => {
    describe("Parse valid product", () => {
      const result = parseToString({
        id: "1234",
        description: "A product",
        name: "Pexie",
        variation: "Caixa",
      });

      test("shoud be a xml header", () => {
        expect(
          result.includes(`<?xml version="1.0" encoding="UTF-8"?>`)
        ).toBeTruthy();
      });
      test("shoud be a xml product", () => {
        expect(result.includes(`<produto>`)).toBeTruthy();
        expect(result.includes(`</produto>`)).toBeTruthy();
      });
    });
  });
});
