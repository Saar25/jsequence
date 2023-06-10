export const map = <T, S>(sequence: Iterable<T>, mapFn: (value: T, index: number) => S): Iterable<S> => {
    let i = 0;
    const iterator = sequence[Symbol.iterator]();

    return {
        [Symbol.iterator]: () => ({
            next(): IteratorResult<S, any> {
                const current = iterator.next();

                return current.done ? current : { value: mapFn(current.value, i++), done: false }
            }
        })
    }
}