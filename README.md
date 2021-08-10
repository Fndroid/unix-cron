# unix-cron

Handle [Unix format Crontab](https://www.ibm.com/docs/en/db2oc?topic=task-unix-cron-format)(eg: `*/30 [9-17]/2 1,2,3 * *`)

## usage

```js
const cron = require("unix-cron");

const c = new cron("*/30 [9-17]/2 1,2,3 * *");

// check if a Date match this cron
c.isMatchDate(new Date());

// get next Date of the cron
c.next();
c.next(new Date("2021-01-01 1:1:0"));

// schedule missions
c.schedule(() => {
  // do stuff
});
```
