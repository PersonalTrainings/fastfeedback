function emptyFn() {}

function batchPromises(items, fn, cb = emptyFn) {
  let retryCount = 3;

  function getCurrentItem(item) {
    return fn(item)
      .then(cb)
      .catch((e) => {
        if (--retryCount > 0) {
          return getCurrentItem(item);
        } else {
          console.info('Error in batchPromises', e);
        }
      });
  }

  return Promise.all(items.map(getCurrentItem));
}

export default batchPromises;
