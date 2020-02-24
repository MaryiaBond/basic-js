module.exports = class DepthCalculator {
    constructor() {
        this.deep = 1;
    }
    calculateDepth(/*arr*/) {
        throw 'Not implemented';
        // let arrFlat = arr.flat()
        // let arrFilter = arr.filter((a, index) => a !== arrFlat[index])
        // if (arrFilter.length !== 0) {
        //     this.deep++
        //     this.calculateDepth(arrFlat)
        // }
        // return this.deep
    }
}
Object.defineProperty(Array.prototype, 'flat', {
    value: function(depth = 0) {
        return this.reduce(function (flat, toFlatten) {
            return flat.concat((Array.isArray(toFlatten) && (depth>1)) ? toFlatten.flat(depth-1) : toFlatten);
        }, []);
    }
});