module.exports = function repeater(str, {...props}) {
    let separator = '+'
    let additionSeparator = '|'
    let repeatTimes = 1
    let additionRepeatTimes = 1
    if (props.separator) {
        separator = props.separator
    }
    if (props.additionSeparator) {
        additionSeparator = props.additionSeparator
    }
    if (props.repeatTimes) {
        repeatTimes = props.repeatTimes
    }
    if (props.additionRepeatTimes) {
        additionRepeatTimes = props.additionRepeatTimes
    }

    let result = ''

        for (let i = 0; i < repeatTimes; i++) {
            result += str

            if(props.addition !== undefined) {
                result += props.addition
                for (let i = 0; i < additionRepeatTimes - 1; i++) {
                    result += additionSeparator + props.addition
                }
            }


            if (i < props.repeatTimes - 1)
                result += separator
        }

    return result
};
  