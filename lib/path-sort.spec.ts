import { pathSort, sortCallback } from '.';

test('Relative path sort', () => {
  const unsorted = ['a/world', 'b/package.json', 'a/lib/index.js'];

  expect(pathSort(unsorted)).toEqual(['a/world', 'a/lib/index.js', 'b/package.json']);
});

test('Absolute path sort', () => {
  const unsorted = ['/a/world', '/b/package.json', '/a/lib/index.js'];

  expect(pathSort(unsorted)).toEqual(['/a/world', '/a/lib/index.js', '/b/package.json']);
});

test('Mixed unicode path sort', () => {
  const unsorted = ['/a/мир', '/a/černie', '/a/лунатик', '/b/правда.json', '/a/lib/index.js', '/src/lala-da', '/lib/a/dkd/a'];

  expect(pathSort(unsorted)).toEqual(['/a/černie', '/a/лунатик', '/a/мир', '/a/lib/index.js', '/b/правда.json', '/lib/a/dkd/a', '/src/lala-da']);
});

test('Empty path', () => {
  const unsorted = ['/a/world', '', 'a/magic', '/a/lib/index.js'];
  expect(pathSort(unsorted)).toEqual(['', '/a/world', '/a/lib/index.js', 'a/magic']);
});

test('Same paths', () => {
  const unsorted = ['b/magic', 'a/world', '/a/world', '/b/magic', '', '/c/lib/index.js', 'a/world', '/a/world'];
  expect(pathSort(unsorted)).toEqual(['', '/a/world', '/a/world', '/b/magic', '/c/lib/index.js', 'a/world', 'a/world', 'b/magic']);
});

test('Standalone function', () => {
  const unsorted = ['a/world', 'b/package.json', '/a/lib/index.js', '', '/a/world'];
  const sortFn = sortCallback();

  expect(unsorted.sort(sortFn)).toEqual(['', '/a/world', '/a/lib/index.js', 'a/world', 'b/package.json']);
});
