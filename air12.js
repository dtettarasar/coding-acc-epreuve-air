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

    let indInitPivot = array.length - 1;
    let indPivot = 0;

    for (let i = 0; i < array.length - 1; i++) {

        if (array[i] < array[indInitPivot]) {

            const temp = array[i];
            array[i] = array[indPivot];
            array[indPivot] = temp;

            indPivot++;
        }

    }

    const temp = array[indInitPivot];
    array[indInitPivot] = array[indPivot];
    array[indPivot] = temp;

    console.log(array);

}

const main = () => {

    const argument = argTester();

    if (argument) {
        quickSort(argument);
    }
}

main();