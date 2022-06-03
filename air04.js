// Un seul à la fois

const argTester = () => {

    const argument = process.argv.slice(2);

    if (argument.length !== 1) {
        console.log("Veuillez passer une chaîne de caractère en argument.");
        console.log("node air04.js 'All Out Life'");
        return false;
    }

    return argument[0];

}

const main = () => {

    const argument = argTester();

    if (argument) {
        console.log(argument);
    }

}

main();
