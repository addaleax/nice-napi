'use strict';
const assert = require('assert');
const nice = require('./');

assert.strictEqual(nice.nice, nice);

const cur = nice(0);
assert.strictEqual(cur + 1, nice(1));
assert.strictEqual(cur + 1, nice(0));

nice(10000);
assert.strictEqual(nice(0), nice(10000));

if (process.getuid() !== 0) {
  assert.throws(() => nice(-1), /nice\(\): Operation not permitted/);
}
