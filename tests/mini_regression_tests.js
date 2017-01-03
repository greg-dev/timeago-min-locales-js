'use strict';

const timeago = require('..');
const test = require('tape');
const fs = require('fs');
const pys = require('pys');

test('equivalence', t => {
  fs.readdir('locales_mini', (err, files) => {
    files.forEach(file => {
      const localeName = pys(file)('0:-3'),
      localeFnMini = require('../locales_mini/' + localeName),
      localeFnOrig = require('../locales_orig/' + localeName);
      let i, ii = 14, n, nn = 1000, actual, expected;

      console.log('\nTesting equivalence [' + localeName + ']');
      for (i = 0; i < ii; i++) {
        for(n = 0; n < nn; n++) {
          actual = localeFnMini(n, i);
          expected = localeFnOrig(n, i);
          t.deepEqual(actual, expected, '('+n+','+i+')');
        }
      }
    });
  });
  t.end();
});
