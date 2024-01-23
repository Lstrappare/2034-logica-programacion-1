// Establece el numero secreto 
let numeroSecreto = 6; 
let numeroUsuario = 0;
// Inicia el número de intentos
let intentos = 1;
// Palabra vez iniciada en singular
let palabraVeces = 'vez';
// Va a crear un blucle hasta que el número coincida.
while (numeroUsuario != numeroSecreto) {
    numeroUsuario = prompt('Me indicas un número del 1 al 10?');
    // Muestra el numero del usuario en consola
    console.log(numeroUsuario);

    // Verifica el numero secreto
    if (numeroUsuario == numeroSecreto) {
        alert (`Felicidades, acertaste! tu numero era: ${numeroUsuario}, lo hacertaste en ${intentos} ${palabraVeces}`);
    } else {
        if (numeroUsuario < numeroSecreto) {
            alert('Cerca! el número secreto es mayor que el número secreto que has puesto.');
        } else if (numeroUsuario > numeroSecreto) {
            alert('Cerca! el número secreto es menor al número que has puesto')
        };
        // Aumenta el número de intentos
        intentos = intentos + 1;
        // Cambia la palabra a plural
        palabraVeces = 'veces';

        //alert (`Lo siento no has acertado, el numero era: ${numeroSecreto}`);
    };
};