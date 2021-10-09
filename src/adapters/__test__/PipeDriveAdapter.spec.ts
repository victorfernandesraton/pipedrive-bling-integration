import { ClientContactTypeEnum } from "../../entity/Client";
import data from "../../__mocks__/PipeDriveExample.json";
import { parseDeal } from "../PipeDriveAdapter";

describe("PipeDriveAdapter", () => {
  describe("ParseDeal", () => {
    const result = parseDeal(data.data[0]);

    test("shoud be have correct props", () => {
      expect(result).toHaveProperty("value");
      expect(result).toHaveProperty("id");
      expect(result).toHaveProperty("status");
    });

    test("shoud be a person", () => {
      expect(result.user).toHaveProperty("contact");
      expect(result.user.contact).toEqual(
        expect.arrayContaining([
          expect.objectContaining({ type: ClientContactTypeEnum.EMAIL }),
        ])
      );
    });
  });
});
