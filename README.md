<div align="center">

# Path-sort

![node-current](https://img.shields.io/node/v/path-sort-extra)
![npm](https://img.shields.io/npm/v/path-sort-extra)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
[![Release](https://github.com/wptoolkit/router/actions/workflows/release.yml/badge.svg)](https://github.com/oblakstudio/path-sort/actions/workflows/release.yml)

![Code Climate maintainability](https://img.shields.io/codeclimate/maintainability/oblakstudio/path-sort)
![Scrutinizer coverage (GitHub/BitBucket)](https://img.shields.io/scrutinizer/coverage/g/oblakstudio/path-sort/master)

</div>

Sorts a list of file/direcotry paths

## Usage
**As a function**
```typescript
const arrayToSort = [
  'path/to/sort',
  'a/magic',
  'b/more-magic',
  '/unicode/is/supported/čukačuka.js',
  '/absolute/path',
  '/best/path/for.js'',
];
import { pathSort } from 'path-sort-extra'
const separator = '/'
const array = pathSort(arrayToSort, separator);
```

**As a sort callback function**
```typescript
const arrayToSort = [
  'path/to/sort',
  'a/magic',
  'b/more-magic',
  '/unicode/is/supported/čukačuka.js',
  '/absolute/path',
  '/best/path/for.js',
];
import { sortCallback } from 'path-sort-extra'
const separator = '/',
const sortFn = sortCallback(separator);
array.sort(sortCallback);
```
