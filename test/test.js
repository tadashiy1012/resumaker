const path = require('path');
const assert = require('power-assert');

describe('resumaker test', function() {
  this.timeout(5000);
  const maker = require('../index.js');
  const testOutDir = path.join(__dirname, 'tmp/');
  it('test1', (done) => {
    maker.make().then((resp) => {
      assert(resp);
      return maker.convert(resp, testOutDir);
    }).then((resp) => {
      assert(resp);
      done();
    }).catch((err) => {
      console.log(err);
      assert(false);
    });
  })
});