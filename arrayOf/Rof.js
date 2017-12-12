Array.Rof = function () {
    return Array.prototype.slice.call(arguments);
};

// Array.Rof = function () {
//     return [].slice.call(arguments);
// };

// Array.Rof = function () {
//     return Array.from(arguments);
// };

// Array.Rof = function () {
//     return Array.prototype.map.call(arguments, e => e);
// };

// Array.Rof = function () {
//     return [].map.call(arguments, e => e);
// };

// Array.Rof = function () {
//     const arr = [];
//     Array.prototype.forEach.call(arguments, e => arr.push(e));
//     return arr;
// };

// Array.Rof = function () {
//     const arr = [];
//     for (var i = 0; i < arguments.length; i++) {
//         arr[i] = arguments[i];
//     }
//     return arr;
// };

// Array.Rof = function () {
//     const arr = [];
//     let i = 0;
//     while (arguments[i]) {
//         arr.push(arguments[i]);
//         i += 1;
//     }
//     return arr;
// };

// Array.Rof = function () {
//     const arr = [];
//     let i = 0;
//     while (arguments[i]) {
//         arr[i] = arguments[i];
//         i += 1;
//     }
//     return arr;
// };
