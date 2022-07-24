// Mélange deux tableaux triés 

// Récupérer arguments
const argTester = () => {

    const argument = process.argv.slice(2);
    const intPattern = /^-?[0-9]+$/;
    const errorMsg = "Veuillez passer en argument deux séries de nombres entiers, séparées par 'fusion'.\nExemple: node air08.js 10 20 30 fusion 15 25 35";

    let switchToSndArr = false;
    const data = {
        arrOne: [],
        arrTwo: []
    }

    if (argument.length < 3 || getQuantity("fusion", argument) !== 1) {
        console.log(errorMsg);
        return false;
    }

    for (let i = 0; i < argument.length; i++) {

        if (intPattern.test(argument[i]) || argument[i] === "fusion") {

            if (argument[i] === "fusion") {
                switchToSndArr = true;
            } else if (!switchToSndArr) {
                data.arrOne.push(argument[i]);
            } else {
                data.arrTwo.push(argument[i]);
            }

        } else {
            console.log(errorMsg);
            return false;
        }

    }

    return data;

}

// Identifier le nombre de fois où une string est présente dans un array
const getQuantity = (str, array) => {

    let quantity = 0;

    for (let i = 0; i < array.length; i++) {

        if (array[i] === str) {
            quantity++;
        }

    }

    return quantity;

}

// Fonction de tri
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

// Fusion deux arrays et tri
const sortedFusion = (array1, array2) => {

    const fullArr = [];
    const length = array1.length < array2.length ? array2.length : array1.length;

    for (let i = 0; i < length; i++) {
        
        if (array1[i]) {
            fullArr.push(parseInt(array1[i]));
        }

        if (array2[i]) {
            fullArr.push(parseInt(array2[i]));
        }

    }

    const sortedArray = selectionSort([...fullArr], 0);

    return sortedArray;

}

// Afficher résultat
const main = () => {

    const argument = argTester();

    if (argument) {
        const result = sortedFusion(argument.arrOne, argument.arrTwo);
        console.log(result.join(' '));
    }

}

// Test air08
const testArgArr = [
    {
        test:sortedFusion([10, 20, 30],[15, 25, 35]),
        result:[10, 15, 20, 25, 30, 35]
    },
    {
        test:sortedFusion([4, 6, 8],[5, 7, 9]),
        result:[4, 5, 6, 7, 8, 9]
    }
];

module.exports = function () {
    return testArgArr;
}


if (require.main === module) {
    // console.log('called directly');
    main();
} else {
   // console.log('required as a module');
}