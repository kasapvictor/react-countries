```js
// SORT BY NAME
const sortByName = (collection) =>
  collection.sort((a, b) => {
    const nameA = a.name.common;
    const nameB = b.name.common;
    if (nameA > nameB) {
      return 1;
    }
    if (nameA < nameB) {
      return -1;
    }
    return 0;
  });
```