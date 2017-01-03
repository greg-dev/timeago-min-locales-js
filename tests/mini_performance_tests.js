'use strict';

const test = require('tape');
const fs = require('fs');
const pys = require('pys');

test('performance', t => {
  fs.readdir('locales_mini', (err, files) => {
    files.forEach(file => {
      const localeName = pys(file)('0:-3'),
      localeFnMini = require('../locales_mini/' + localeName),
      localeFnOrig = require('../locales_orig/' + localeName); 
      let i, ii = 14, n, nn = 1000, r, rr = 10;

      console.log('\nTesting performance [' + localeName + ']');
      let tOrig = (new Date()).getTime();
      for (r = 0; r < rr; r++) {
        for (i = 0; i < ii; i++) {
          for (n = 0; n < nn; n++) {
            localeFnOrig(n, i);
          }
        }
      }
      tOrig = (new Date()).getTime() - tOrig;
      let tMini = (new Date()).getTime();
      for (r = 0; r < rr; r++) {
        for (i = 0; i < ii; i++) {
          for (n = 0; n < nn; n++) {
            localeFnMini(n, i);
          }
        }
      }
      tMini = (new Date()).getTime() - tMini;
      const cond = tMini <= tOrig,
      msg = (cond ? 'not ' : '') + 'slower than orig '+tOrig+'ms: '+tMini+'ms';
      t.true(cond, msg);
    });
  });
  t.end();
});
