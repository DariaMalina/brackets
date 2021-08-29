module.exports = function check(str, bracketsConfig) {
    const openPair = []
    const closePair = {}
    for (let a = 0; a < bracketsConfig.length; a++) {
        openPair.push(bracketsConfig[a][0])
        closePair[bracketsConfig[a][1]] = bracketsConfig[a][0]
    }

    let stack = []
    for (let i = 0; i < str.length; i++) {
        let currentElem = str[i];
        if (openPair.includes(currentElem)) {
            if (str[i] === closePair[currentElem] && stack.includes(str[i])) {
                stack.pop()
            } else {
                stack.push(currentElem)
            }

        } else {
            if (stack.length === 0) {
                return false
            }

            let lastElementStack = stack[stack.length - 1]
            if (closePair[currentElem] === lastElementStack) {
                stack.pop()
            } else {
                return false
            }
        }
    }
    return stack.length === 0
}
