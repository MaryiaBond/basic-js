module.exports = class DepthCalculator {
    constructor() {
        this.deep = 1;
        this.currentDeep = 0;
    }
    deepOfElement(arr) {
        this.currentDeep++
        let arrFlat = arr.flat(arr)
        console.log(arrFlat)
        let arrFilter = arr.filter((a, index) => a !== arrFlat[index])
        if (arrFilter.length !== 0) {
            this.deepOfElement(arrFlat)
        }
        if(this.currentDeep > this.deep)
            this.deep = this.currentDeep
    }
    calculateDepth(arr) {
        let arrFlat = arr.flat()
        let arrFilter = arr.filter((a, index) => a !== arrFlat[index])
        if (arrFilter.length !== 0) {
            this.deep++
            this.calculateDepth(arrFlat)
        }
        return this.deep
    }
}
Object.defineProperty(Array.prototype, 'flat', {
    value: function(depth = 1) {
        return this.reduce(function (flat, toFlatten) {
            return flat.concat((Array.isArray(toFlatten) && (depth>1)) ? toFlatten.flat(depth-1) : toFlatten);
        }, []);
    }
});