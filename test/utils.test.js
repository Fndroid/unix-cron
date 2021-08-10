const { newArray } = require("../lib/utils");
const assert = require("assert");

describe("utils", () => {
  it("newArray", () => {
    assert.deepStrictEqual(newArray(3), [0, 1, 2]);
    assert.deepStrictEqual(newArray(3, 2), [2, 3, 4]);
    assert.deepStrictEqual(newArray(3, 2, 2), [2, 4, 6]);
  });
});
