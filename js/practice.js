function generateProblem(code) {
    switch(code) {
        case "x11-2d":
            return `$${Math.floor(Math.random() * 90) + 10} \\times 11$`
    }
}
$(document).ready(() => {
    $(".problem").html(generateProblem("x11-2d"))
})