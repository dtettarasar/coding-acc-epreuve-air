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

const rotateArr = (array) => {

    const finalArr = [];
    const lastElem = array[0];

    for (let i = 1; i < array.length;i++) {
        finalArr.push(array[i]);
    }

    finalArr.push(lastElem);

    return finalArr;

}

const main = () => {

    const arguments = argTester();

    if (arguments) {
        const result = rotateArr(arguments);
        console.log(result.join(', '));
    }

}

main();