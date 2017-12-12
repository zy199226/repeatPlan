Array.Rfrom = (function () {
    const toStr = Object.prototype.toString;
    const isCallable = function (fn) {
        return typeof fn === 'function' || toStr.call(fn) === '[Object Function]';
    };

    const toInteger = function (value) {
        const num = Number(value);
        if (isNaN(num)) {
            return 0;
        }
        if (num === 0 || !isFinite(num)) {
            return num;
        }
        return num > 0
            ? Math.floor(num)
            : Math.ceil(num);
    };

    const maxSafeInteger = Math.pow(2, 53) - 1;
    const toLength = function (value) {
        const len = toInteger(value);
        return Math.min(Math.max(0, len), maxSafeInteger);
    };

    return function (arrayLike) {
        const items = Object(arrayLike);

        if (arrayLike == null) {
            throw new TypeError('Array.from requires an array-like object - not null or undefined');
        }

        const mapFn = arguments.length > 1
            ? arguments[1]
            : void (0);
        let T;
        if (mapFn !== undefined) {
            if (!isCallable(mapFn)) {
                throw new TypeError('Array.from: when provided, the second arguments must be a function.');
            }

            if (arguments.length > 2) {
                T = arguments[2];
            }
        }

        const len = toLength(items.length
            ? items.length
            : items.size);
        const A = [];
        let K = 0;
        const iterator = arrayLike[Symbol.iterator]();
        while (K < len) {
            if (mapFn) {
                A[K] = typeof T === 'undefined'
                    ? mapFn(iterator.next().value, K)
                    : mapFn.call(T, iterator.next().value, K);
            } else {
                A[K] = iterator.next().value;
            }
            K += 1;
        }

        return A;
    };
}());
