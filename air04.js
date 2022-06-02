// Un seul à la fois

const argTester = () => {

    const argument = process.argv.slice(2);

    console.log(argument);

}

const main = () => {

    argTester();

}

main();