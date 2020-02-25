module.exports =  class DepthCalculator {
    calculateDepth(array, record = 1) {
        if (!Array.isArray(array)) throw new Error('not an array');
        let deep = record;
        for(let i = 0; i < array.length; ++i) {
            if (Array.isArray(array[i])) {
                let subDeep = this.calculateDepth(array[i], record + 1);
                if (subDeep > deep) {
                    deep = subDeep;
                }
            }
        }
        return deep;
    }
}
