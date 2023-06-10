export const take = <T>(sequence: Iterable<T>, limit: number): Iterable<T> => {
  let i = 0;
  const iterator = sequence[Symbol.iterator]();

  return {
    [Symbol.iterator]: () => ({
      next(): IteratorResult<T, any> {
        if (i < limit) {
          i++;
          return iterator.next();
        } else {
          return { value: undefined, done: true };
        }
      },
    }),
  };
};
