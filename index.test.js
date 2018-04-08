const assert = require('assert');
const checksorted = require('./index');

describe('测试', function() {
  let arr1 = [],
      arr2 = [1],
      arr3 = [1, 6],
      arr4 = [1, 2, 3, 4, 5, 6],
      arr5 = [1, 1, 3, 4, 5, 6],
      arr6 = [6, 4, 3, 1, 1],
      arr7 = [1, 6, 2, 3],
      arr8 = [9, 6, 4, 1];
  it(`测试数组[${arr1}]`, function() {
    assert.equal(checksorted(arr1), true);
  });
  it(`测试数组[${arr2}]`, function() {
    assert.equal(checksorted(arr2), true);
  });
  it(`测试数组[${arr3}]`, function() {
    assert.equal(checksorted(arr3), true);
  });
  it(`测试数组[${arr4}]`, function() {
    assert.equal(checksorted(arr4), true);
  });
  it(`测试数组[${arr5}]`, function() {
    assert.equal(checksorted(arr5), true);
  });
  it(`测试数组[${arr6}]`, function() {
    assert.equal(checksorted(arr6), false);
  });
  it(`测试数组[${arr7}]`, function() {
    assert.equal(checksorted(arr7), false);
  });
  it(`测试数组[${arr8}]`, function() {
    assert.equal(checksorted(arr8), false);
  });
});
