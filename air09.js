// Rotation vers la gauche

const argTester = () => {

    const arguments = process.argv.slice(2);

    if (arguments.length < 2) {
        console.log("Veuillez passer au moins deux arguments.");
        console.log("Exemple : node air09.js Rust in Peace");
        return false;
    }

    return arguments

}

const rotateArr = (array) = {

}

const main = () => {

    const arguments = argTester();

    if (arguments) {
        console.log(arguments);
    }

}

main();