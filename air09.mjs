// Rotation vers la gauche

const argTester = () => {

    const args = process.argv.slice(2);

    if (args.length < 2) {
        console.log("Veuillez passer au moins deux arguments.");
        console.log("Exemple : node air09.mjs Rust in Peace");
        return false;
    }

    return args

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

    const args = argTester();

    if (args) {
        const result = rotateArr(args);
        console.log(result.join(', '));
    }

}

//Get file name
const args = process.argv;
const arr = args[1].split('/');

// Execute main if we launch the script directly in terminal
if (arr[arr.length - 1] === "air09.mjs") {
    main();
}