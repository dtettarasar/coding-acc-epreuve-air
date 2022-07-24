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

const quickSortPartition = (array, indStartPart, indEndPart) => {

    let indInitPivot = indEndPart;
    let indPivot = indStartPart;

    for (let i = indStartPart; i < indEndPart; i++) {

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

    return indPivot;

}

const quickSortProcess = (array, indStartProc = 0, indEndProc = null) => {

    if (indEndProc == null) {
        indEndProc = array.length - 1;
    }

    if (indEndProc > indStartProc) {

        let pivot = quickSortPartition(array, indStartProc, indEndProc);

        quickSortProcess(array, indStartProc, pivot -1);
        quickSortProcess(array, pivot + 1, indEndProc);

    }

    return array;

}


const main = () => {

    const argument = argTester();

    if (argument) {
        const result = quickSortProcess(argument);
        console.log(result.join(' '));
    }

}

// Test air12
const testArgArr = [
    {
        test:quickSortProcess([11,9,39,2,8,87,92,63,74,6,5,69,63,33,30]),
        result:[
            2,  5,  6,  8,  9, 11,
           30, 33, 39, 63, 63, 69,
           74, 87, 92
        ]
    },
    {
        test:quickSortProcess([4,1,8,6,2,9,5,3,0,7]),
        result:[
            0, 1, 2, 3, 4,
            5, 6, 7, 8, 9
        ]  
    }
];

console.log(testArgArr);

// main();
