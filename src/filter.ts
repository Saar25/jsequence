export const filter = <T>(sequence: Iterable<T>, predicate: (value: T, index: number) => boolean): Iterable<T> => {
  let i = 0;
  const iterator = sequence[Symbol.iterator]();

  return {
    [Symbol.iterator]: () => ({
      next(): IteratorResult<T, any> {
        let current = iterator.next();
        while (!current.done && !predicate(current.value, i++)) {
          current = iterator.next();
        }
        return current as IteratorResult<T, any>;
      },
    }),
  };
};
