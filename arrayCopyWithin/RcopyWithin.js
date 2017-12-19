Array.prototype.RcopyWithin = function (target, start, end) {
    if (target == null) {
        throw new TypeError('this is null or not defined');
    }

    const O = Object(this);
    const len = O.length >>> 0;

    const relativeTarget = target >> 0;
    let to = target < 0 ? Math.max(len + relativeTarget, 0) : Math.min(relativeTarget, len);

    const relativeStart = start >> 0;
    let from = start < 0 ? Math.max(len + relativeStart, 0) : Math.min(relativeStart, len);

    const relativeEnd = end ? end >> 0 : len;
    let final = end < 0 ? Math.max(len + relativeEnd, 0) : Math.min(relativeEnd, len);

    if (from >= final) {
        return O;
    }

    let count = Math.min(final - from, len - to);

    let directoin = 1;

    if (from < to && to < (from + count)) {
        directoin = -1;
        to += count - 1;
        from += count - 1;
    }

    while (count > 0) {
        if (from in O) {
            O[to] = O[from];
        } else {
            delete O[to];
        }

        from += directoin;
        to += directoin;
        count --;
    }

    return O;
};
