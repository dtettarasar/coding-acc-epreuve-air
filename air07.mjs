// Insertion dans un tableau trié

// Récuperer argument
const argTester = () => {

    const errorMsg = "Veuillez passer une série de nombres entiers en argument (minimum 2 nombres)\nExemple: node air07.mjs 1 3 4 2";

    const argument = process.argv.slice(2);

    const intPattern = /^-?[0-9]+$/;

    const data = {
        initialArr: [],
        elemToAdd: null
    }

    if (argument.length < 2) {

        console.log(errorMsg);
        return false;

    }

    for (let i = 0; i < argument.length; i++) {
        
        if (!intPattern.test(argument[i])) {

            console.log(errorMsg);
            return false;

        } else if (i < argument.length - 1) {

            data.initialArr.push(parseInt(argument[i]));

        } else {

            data.elemToAdd = parseInt(argument[i]);

        }

    }

    return data;

}

const selectionSort = (array, indStart) => {

    let lowestNumInd = indStart;
  
    for (let i = indStart; i < array.length; i++) {
  
      if (array[i] < array[lowestNumInd]) {
        lowestNumInd = i;
      }
  
    }
  
    const temp = array[indStart];
    array[indStart] = array[lowestNumInd];
    array[lowestNumInd] = temp;
  
    if (indStart !== array.length - 1) {
      indStart++;
      selectionSort(array, indStart);
    }
  
    return array;
  
}

const sortedInsert = (array, newElem) => {

    const arrayToSort = [...array];
    arrayToSort.push(newElem);

    const sortedArray = selectionSort(arrayToSort, 0);

    return sortedArray;

}

const main = () => {

    const argument = argTester();

    if (argument) {
        const result = sortedInsert(argument.initialArr, argument.elemToAdd);
        console.log(result.join(' '));
    }

}

main();