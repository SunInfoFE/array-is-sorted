# array-is-sorted

检测数组是否排序的模块


# Installation

```bash
$ npm install @sunflower/array-is-sorted
```

# Usage

默认的排序规则为由小到大。
```js
const checksorted = require('@sunflower/array-is-sorted');

checksorted([1, 3, 5]); // => true
checksorted([3, 1, 5]); // => false
```

自定义排序规则
```js
const checksorted = require('@sunflower/array-is-sorted');

let myfun = function(prev, next) {
  return next.charCodeAt() - prev.charCodeAt()
};

checksorted(['a', 'b', 'f'], myfun); // => true
checksorted(['c', 'z', 'm'], myfun); // => false
```

# Tests

安装`mocha`测试框架，然后执行测试命令：
```bash
$ yarn
$ npm test
```

# License
The [MIT](LICENSE) License