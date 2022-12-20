function comprobrar(){

//var cadena = "Hola, mundo";
//var primerCaracter = cadena.charAt(0);
// primerCaracter es H

//var cadena = "Hola, mundo";
//var ultimoCaracter = cadena.charAt(cadena.length - 1);
// ultimoCaracter es o
}


function isValidCif(cif) {
	if (!cif || cif.length !== 9) {
		return false;
	}

	var letters = ['J', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'];
	var digits = cif.substr(1, cif.length - 2);
	var letter = cif.substr(0, 1);
	var control = cif.substr(cif.length - 1);
	var sum = 0;
    var i;
	var digit;

	if (!letter.match(/[A-Z]/)) {
		return false;
	}

	for (i = 0; i < digits.length; ++i) {
		digit = parseInt(digits[i]);

		if (isNaN(digit)) {
			return false;
		}

		if (i % 2 === 0) {
			digit *= 2;
			if (digit > 9) {
				digit = parseInt(digit / 10) + (digit % 10);
			}

			sum += digit;
		} else {
			sum += digit;
		}
	}

	sum %= 10;
	if (sum !== 0) {
		digit = 10 - sum;
	} else {
		digit = sum;
	}

	if (letter.match(/[ABEH]/)) {
		return String(digit) === control;
	}
	if (letter.match(/[NPQRSW]/)) {
		return letters[digit] === control;
	}

	return String(digit) === control || letters[digit] === control;
}

function checkCif() {
	var cifs = document.getElementById('cif').value.split(',');
  var message = document.getElementsByClassName('message')[0];
  
  for (var i = 0; i < cifs.length; ++i) {
  	if (isValidCif(cifs[i].trim())) {
			message.innerHTML += '<br />CIF ' + cifs[i] + ' válido';
  	} else {
  		message.innerHTML += '<br />CIF ' + cifs[i] + ' no válido';
  	}
  }
}

