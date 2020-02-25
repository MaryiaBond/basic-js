const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length
  },
  addLink(value) {
    value = '' + value
    this.chain.push(`( ${value} )~~`)
    return chainMaker
  },
  removeLink(position) {
    if (position <= 0 || position > this.chain.length || typeof position === 'string') {
     this.chain=[]
     throw new Error
    }
    position === undefined ?
        this.chain.pop() :
        this.chain.splice(position-1, 1)


    return chainMaker
  },
  reverseChain() {
    this.chain.reverse()
    return chainMaker
  },
  finishChain() {
    let chain = this.chain.join('')
    this.chain = []
    return chain.slice(0, chain.length-2)
  }
};


module.exports = chainMaker;
