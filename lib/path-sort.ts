export function sorter(a: string[], b: string[]): number {
  for (let i = 0; i < Math.max(a.length, b.length); i++) {
    if (i == 0) {
      if (a[i] == '' && b[i] !== '') {
        return -1;
      }
      if (b[i] == '' && a[i] !== '') {
        return 1;
      }
      if (a[i] == '' && b[i] == '') {
        continue;
      }
    }

    if (!(i in a)) {
      return -1;
    }

    if (!(i in b)) {
      return 1;
    }

    if (a[i].toUpperCase() < b[i].toUpperCase()) {
      return -1;
    }

    if (a[i].toUpperCase() > b[i].toUpperCase()) {
      return 1;
    }

    if (a.length < b.length) {
      return -1;
    }

    if (a.length > b.length) {
      return 1;
    }
  }
  return 0;
}

export function pathSort(paths: string[], sep = '/') {
  return paths
    .map((path) => path.split(sep))
    .sort(sorter)
    .map((path) => path.join(sep));
}

export function sortCallback(sep = '/'): (a: string, b: string) => number {
  return (a: string, b: string) => {
    return sorter(a.split(sep), b.split(sep));
  };
}
