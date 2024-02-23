//particular number generation functions
function generateNum(min, max) {
    return Math.floor(Math.random() * (max-min)) + min;
}
function generateNumDivBy(factor, min, max) {
    let num = generateNum(min, max)
    while (num % factor != 0) {
        num = generateNum(min, max)
    }
    return num;
}
//preliminary generation functions
function genMult(factor, digits) {
    const numOfDigits = parseInt(digits);
    return `$${generateNum(10**(numOfDigits-1), 10**numOfDigits)} \\times ${factor}$`
}
function genFOIL(digits, digits2) {
    digits = parseInt(digits);
    digits2 = parseInt(digits2);
    const num1 = generateNum(10**(digits-1), 10**(digits));
    const num2 = generateNum(10**(digits-1), 10**(digits));
    return [`$${num1} \\times ${num2}$`, num1 * num2]
}
//problem generation function
function generateProblem(code, digits, digits2, factor) {
    //check for the codes and return the appropriate problem in latex
    switch(code) {
        case "mult":
            $(".problem").html(generateProblem(""))
            return genMult(factor, digits)
            break;
        case "foil":
            return genFOIL(digits, digits2)
            break;
        
    }
}

$(document).ready(() => {
    $(".problem").html(generateProblem("x11-2d"))
})