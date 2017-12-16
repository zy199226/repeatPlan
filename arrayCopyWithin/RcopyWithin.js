Array.prototype.RcopyWithin = function (target, start, end) {
    if (target == null) {
        throw new TypeError('this is null or not defined');
    }

    const O = Object(this);
    const len = O.length >>> 0;

    const relativeStart = start >> 0;
    const from = start < 0 ? (len + relativeStart) : relativeStart;

    const relativeEnd = end >> 0;
    const to = end < 0 ? (len + relativeEnd) : relativeEnd;

    if (from >= to) {
        return this;
    }
};
