// Sur chacun d’entre eux

const argTester = () => {

    const data = {
        intList: []
    };
    const intPattern = /^-?[0-9]+$/;

    const arguments = process.argv.slice(2);

    for (let i = 0; i < arguments.length -1; i++) {

        if (intPattern.test(arguments[i])) {
            const intVal = parseInt(arguments[i]);
            data.intList.push(intVal)
        } else {
            console.log("Veuillez passer une série de nombre entier en arguments");
            console.log("Veuillez passer en dernier, le nombre à utiliser pour tous les calculs");
            console.log("Exemple: node air05.js 10 11 12 20 '-5'");
            return false;
        }

    }

    console.log(arguments);
    console.log(data);

}

argTester();