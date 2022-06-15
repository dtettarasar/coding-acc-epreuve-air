// Le roi des tris

const argTester = () => {

    const argument = process.argv.slice(2);
    const intPattern = /^-?[0-9]+$/;
    const errorMsg = "Veuillez passer en argument une série de nombres entiers (au moins 2 nombres).\nExemple: node air12.js 10 20 30 15 25 35";
    const intArr = [];

    if (argument.length < 2) {
        console.log(errorMsg);
        return false;
    }

    for (let i = 0; i < argument.length; i++) {

        if (!intPattern.test(argument[i])) {
            console.log(errorMsg);
            return false;
        } else {
            intArr.push(parseInt(argument[i]));
        }

    }

    return intArr;

}

const quickSort = (array) => {

}

const main = () => {

    const argument = argTester();

    if (argument) {
        console.log(argument);
    }
}

main();