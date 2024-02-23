const urlParams = new URLSearchParams(window.location.search);
const code = urlParams.get('code');
const parameters = code.split("-");
console.log(parameters[0])
console.log(parseInt(parameters[1]))
console.log(parseInt(parameters[2]))
console.log(parseInt(parameters[3]))
$(".problem").text(generateProblem(parameters[0], parseInt(parameters[1]), parseInt(parameters[2]), parseInt(parameters[3])))
