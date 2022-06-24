// Un seul à la fois

const argTester = () => {

    const argument = process.argv.slice(2);

    if (argument.length !== 1) {
        console.log("Veuillez passer une chaîne de caractère en argument.");
        console.log("node air04.mjs 'All Out Life'");
        return false;
    }

    return argument[0];

}

const removeDuplicateChar = (str) => {

    const finalStrArr = [];
    const strArr = str.split('');

    for (let i = 0; i < strArr.length; i++) {

        if (strArr[i] !== strArr[i - 1]) {
            finalStrArr.push(strArr[i]);
        }

    }

    return finalStrArr.join('');

}

const main = () => {

    const argument = argTester();

    if (argument) {
        const result = removeDuplicateChar(argument);
        console.log(result);
    }

}

//Get file name
const args = process.argv;
const arr = args[1].split('/');

// Execute main if we launch the script directly in terminal
if (arr[arr.length - 1] === "air04.mjs") {
    main();
}
