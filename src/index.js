module.exports = function check(str, bracketsConfig) {
    let brack = bracketsConfig.map(el=> el.join(''));
    let answer = true;
    while (str.length && answer) {
        answer = false;
        for (let i = 0; i < brack.length; i++) {
            let basicPosition = str.indexOf(brack[i]);
            if (basicPosition !== -1) {
                str = str.slice(0, basicPosition) + str.slice(basicPosition + 2);
                answer = true;
            }
        }
    }
    return !str.length;
}
