const urlParams = new URLSearchParams(window.location.search);
const code = urlParams.get('code');
const parameters = code.split("-");
$(".problem").text(generateProblem(parameters[0], parseInt(parameters[1]), parseInt(parameters[2]), parseInt(parameters[3])))
