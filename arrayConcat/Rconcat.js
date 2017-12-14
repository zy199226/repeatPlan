// Array.prototype.Rconcat = (function () {
//     const isArray = function (arg) {
//         return Object.prototype.toString.call(arg) === '[object Array]';
//     };
//
//     const newArray = function (arr) {
//         return arr.slice();
//     };
//
//     return function () {
//         const arr = newArray(this);
//         for (let i = 0; i < arguments.length; i++) {
//             if (isArray(arguments[i])) {
//                 const args = arguments[i];
//                 for (let a = 0; a < args.length; a++) {
//                     if (a in args) {
//                         arr[arr.length] = args[a];
//                     } else {
//                         arr.length += 1;
//                     }
//                 }
//             } else {
//                 arr[arr.length] = arguments[i];
//             }
//         }
//         return arr;
//     };
// }());

// Array.prototype.Rconcat = (function() {
//     'use strict';
//     const isArray = function (arg) {
//         return Object.prototype.toString.call(arg) === '[object Array]';
//     };
//     const newArray = function (arr) {
//         return arr.map(function (a) {
//             return a;
//         });
//     };
//
//     return function () {
//         const arr = newArray(this);
//         let K = 0;
//         while (K < arguments.length) {
//             if (isArray(arguments[K])) {
//                 for (let i = 0; i < arguments[K].length; i++) {
//                     if (i in arguments[K]) {
//                         arr.push(arguments[K][i]);
//                     } else {
//                         arr.length += 1;
//                     }
//                 }
//             } else {
//                 arr.push(arguments[K]);
//             }
//             K += 1;
//         }
//         return arr;
//     };
// }());

Array.prototype.Rconcat = (function() {
    'use strict';
    const isArray = function (arg) {
        return Object.prototype.toString.call(arg) === '[object Array]';
    };
    const newArray = function (arr) {
        const newArr = [];
        for (let i = 0; i < arr.length; i++) {
            if (i in arr) {
                newArr[i] = arr[i];
            } else {
                newArr.length += 1;
            }
        }
        return newArr;
    };

    return function () {
        const arr = newArray(this);
        let K = 0;
        while (K < arguments.length) {
            if (isArray(arguments[K])) {
                for (let i = 0; i < arguments[K].length; i++) {
                    if (i in arguments[K]) {
                        arr.push(arguments[K][i]);
                    } else {
                        arr.length += 1;
                    }
                }
            } else {
                arr.push(arguments[K]);
            }
            K += 1;
        }
        return arr;
    };
}());
