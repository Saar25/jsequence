import { sequenceOf } from ".";
import { filter } from "./filter";
import { map } from "./map";

export class Sequence<T> implements Iterable<T> {
    constructor(private readonly iterable: Iterable<T>) { }

    [Symbol.iterator](): Iterator<T, any, undefined> {
        return this.iterable[Symbol.iterator]();
    }

    filter = (predicate: (value: T, index: number) => boolean) => {
        const iterable = filter(this, predicate);

        return sequenceOf(iterable);
    }

    map = <S>(mapFn: (value: T, index: number) => S) => {
        const iterable = map(this, mapFn);

        return sequenceOf(iterable);
    }

    toArray = () => [...this.iterable]
}