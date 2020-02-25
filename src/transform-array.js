module.exports =  function transform(arr) {
    if (!Array.isArray(arr)) {
        throw new Error
    }
    let newArr = []
    let newIndex = 0
    let oldIndex = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== undefined) {

            if (arr[i] === '--discard-next') {
                oldIndex++
                oldIndex++
                i++
            } else {
                if (arr[i] === '--discard-prev') {
                    if(newIndex > 0 ) {
                        newArr.pop()
                        newIndex--
                    }
                    oldIndex++
                } else {
                    if (arr[i] === '--double-next') {
                        if (arr[i + 1] === undefined) {
                            return newArr
                        }
                        newArr[newIndex] = arr[oldIndex + 1]
                        newIndex++
                        oldIndex++
                    } else {
                        if (arr[i] === '--double-prev') {
                            if(arr[i-1] !== undefined) {
                                newArr[newIndex] = arr[oldIndex - 1]
                                newIndex++
                            }
                            oldIndex++
                        } else {
                            newArr[newIndex] = arr[oldIndex]
                            newIndex++
                            oldIndex++
                        }

                    }
                }
            }

        }

    }

    return newArr
};
