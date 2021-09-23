<div align="center">
# Path-sort
</div>

## Usage
**As a function**
```typescript
import { pathSort } from 'path-sort-extra'
const separator = '/'
const array = pathSort(arrayToSort, separator);
```

**As a sort callback function**
```typescript
import { sortCallback } from 'path-sort-extra'
const separator = '/',
const sortFn = sortCallback(separator);
array.sort(sortCallback);
```
