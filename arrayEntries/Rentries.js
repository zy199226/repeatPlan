Array.prototype.Rentries = function () {
    let i = this.length;
    const resArray = new Array(i);
    while (i--) {
        resArray[i] = [i, this[i]];
    }
    let k = 0;
    return {
        next() {
            k += 1;
            return {
                value: resArray[k - 1],
                done: k > resArray.length ? true : false
            };
        }
    };
};
