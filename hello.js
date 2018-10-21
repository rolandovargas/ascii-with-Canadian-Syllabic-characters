//console.log('Hello, world');
//console.log("this is my argument: " + process.argv[2])
//console.log("h   h\nhhh\nh  h");


var inputString0 = process.argv[2]; //el texto que viene de terminal
var inputString = inputString0.toLowerCase(); //se le quitan las mayúsculas
var listaCaracteres = []; 
var imprimir = []; 


for (var i=0; i<inputString.length; i++) {
	if (inputString[i] == "a") { listaCaracteres.push(String.fromCharCode(5609));}
	if (inputString[i] == "b") { listaCaracteres.push(String.fromCharCode(5624));}
	if (inputString[i] == "c") { listaCaracteres.push(String.fromCharCode(5701));}
	if (inputString[i] == "d") { listaCaracteres.push(String.fromCharCode(5599));}
	if (inputString[i] == "e") { listaCaracteres.push(String.fromCharCode(5478));}
	if (inputString[i] == "f") { listaCaracteres.push(String.fromCharCode(5556));}
	if (inputString[i] == "g") { listaCaracteres.push(String.fromCharCode(5660));}
	if (inputString[i] == "h") { listaCaracteres.push(String.fromCharCode(5500));}
	if (inputString[i] == "i") { listaCaracteres.push(String.fromCharCode(5194));}
	if (inputString[i] == "j") { listaCaracteres.push(String.fromCharCode(5262));}
	if (inputString[i] == "k") { listaCaracteres.push(String.fromCharCode(5607));}
	if (inputString[i] == "l") { listaCaracteres.push(String.fromCharCode(5291));}
	if (inputString[i] == "m") { listaCaracteres.push(String.fromCharCode(5691));}
	if (inputString[i] == "n") { listaCaracteres.push(String.fromCharCode(5673));}
	if (inputString[i] == "o") { listaCaracteres.push(String.fromCharCode(5156));}
	if (inputString[i] == "p") { listaCaracteres.push(String.fromCharCode(5230));}
	if (inputString[i] == "q") { listaCaracteres.push(String.fromCharCode(5227));}
	if (inputString[i] == "r") { listaCaracteres.push(String.fromCharCode(5511));}
	if (inputString[i] == "s") { listaCaracteres.push(String.fromCharCode(5398));}
	if (inputString[i] == "t") { listaCaracteres.push(String.fromCharCode(5162));}
	if (inputString[i] == "u") { listaCaracteres.push(String.fromCharCode(5696));}
	if (inputString[i] == "v") { listaCaracteres.push(String.fromCharCode(5178));}
	if (inputString[i] == "w") { listaCaracteres.push(String.fromCharCode(5615));}
	if (inputString[i] == "x") { listaCaracteres.push(String.fromCharCode(5742));}
	if (inputString[i] == "y") { listaCaracteres.push(String.fromCharCode(5563));}
	if (inputString[i] == "z") { listaCaracteres.push(String.fromCharCode(5703));}
	if (inputString[i] == " ") { listaCaracteres.push(String.fromCharCode(5159));}
}
//console.log(listaCaracteres)
var imprimir = listaCaracteres.join("");
console.log('\n\n\n')
console.log(imprimir)
console.log('\n\n\n')

//if (inputString[i] == "a") { console.log(String.fromCharCode(5609));}
//if (inputString[i] == "b") { console.log(String.fromCharCode(5624));}

//listaCaracteres.push(inputString[i]);//anexa el caracter al array
