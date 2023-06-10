import { Sequence } from './sequence';

export const sequenceOf = <T>(iterable: Iterable<T>): Sequence<T> => {
  return new Sequence<T>(iterable);
};
