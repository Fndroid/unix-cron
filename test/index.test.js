const assert = require("assert");
const cron = require("../lib");

describe("index", function () {
  it("#isMatchDate", function () {
    const c = new cron("1 1 * * *");
    assert.strictEqual(c.isMatchDate(new Date("2021-1-1 1:1:0")), true);
    assert.strictEqual(c.isMatchDate(new Date("2021-1-1 2:1:0")), false);
  });

  it("#next", function () {
    const c = new cron("1 1 * * *");
    assert.strictEqual(
      c.next(new Date("2021-1-1 1:1:0")).toString(),
      new Date("2021-1-2 1:1:0").toString()
    );

    const c1 = new cron("1 1 13,14 8 2");
    assert.strictEqual(
      c1.next(new Date("2021-8-9 1:1:0")).toString(),
      new Date("2021-8-10 1:1:0").toString()
    );

    const c2 = new cron("1 1 13 8 7");
    assert.strictEqual(
      c2.next(new Date("2021-8-9 1:1:0")).toString(),
      new Date("2021-8-13 1:1:0").toString()
    );

    const c3 = new cron("* * 29 2 *");
    assert.strictEqual(
      c3.next(new Date("2021-8-9 1:1:0")).toString(),
      new Date("2024-2-29 0:0:0").toString()
    );
  });
});
