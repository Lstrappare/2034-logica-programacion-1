// Rango del 1 al numero que ponga el usuario.
let rango = prompt('Indica el rango del 1 al numero que tu quieras: ');
// Establece el numero secreto.
let numeroSecreto = Math.floor(Math.random()*rango) + 1; 
let numeroUsuario = 0;
// Inicia el número de intentos.
let intentos = 1;
// Determina el número máximo de intentos.
let maximosIntentos = 3;

// Va a crear un blucle hasta que el número coincida.
while (numeroUsuario != numeroSecreto) {
    numeroUsuario = prompt(`Me indicas un número del 1 al ${rango}?`);
    // Muestra el numero del usuario en consola.
    console.log(numeroUsuario);

    // Verifica el numero secreto.
    if (numeroUsuario == numeroSecreto) {
        alert (`Felicidades, acertaste! tu numero era: ${numeroUsuario}, lo hacertaste en ${intentos} ${intentos == 1 ? 'vez' : 'veces'}`);
    } else {
        // Pistas para el usuario.
        if (numeroUsuario < numeroSecreto) {
            alert('Cerca! el número secreto es mayor que el número secreto que has puesto.');
        } else if (numeroUsuario > numeroSecreto) {
            alert('Cerca! el número secreto es menor al número que has puesto')
        };

        // Aumenta el número de intentos.
        // intentos = intentos + 1;
        intentos ++;

        // Cantidad máxima de intentos.
        if (intentos > maximosIntentos) {
            alert (`Lo siento no has acertado, llegaste a el número máximo de intentos (${maximosIntentos}), el numero era: ${numeroSecreto}`);
            // Termina el bucle.
            break;
        };
    };
};