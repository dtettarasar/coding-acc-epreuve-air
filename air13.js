// Meta exercice

const test00 = require('./air00.js')();
const test01 = require('./air01.js')();
const test02 = require('./air02.js')();
const test03 = require('./air03.js')();
let totalTest = 0;
let totalSuccesses = 0;

const testStarter = (scriptNum, argArr) => {

    for (let i = 0; i < argArr.length; i++) {

        const testResult = getTestResult(argArr[i]);
        const testNum = i + 1;

        const redFont = "\x1b[31m";
        const greenFont = "\x1b[32m";

        const colorFont = testResult === "success" ? greenFont : redFont;

        console.log(colorFont, scriptNum + " ("+ testNum +"/" + argArr.length + ") : " + testResult);

    }

}

// test functions to use when result value is an array
const getTestResult = (argObj) => {

    totalTest++;

    // If the result to test is an array, check all value in array to validate test
    if (Array.isArray(argObj.result)) {
        if (argObj.test.length === argObj.result.length) {

            for (let i = 0; i < argObj.test.length; i++) {

                if (argObj.test[i] !== argObj.result[i]) {

                    return "failure";
                    
                }

            }
    
            totalSuccesses++;
            return "success";
    
        } else {
    
            return "failure";
    
        }

    }  else if (typeof argObj.result === "string") {

        if (argObj.test === argObj.result) {

            totalSuccesses++;
            return "success";
    
        } else {
    
            return "failure";
    
        }

    }

}

testStarter("air00", test00);
testStarter("air01", test01);
testStarter("air02", test02);
testStarter("air03", test03);
console.log( "\x1b[37m", "Total success: ("+ totalSuccesses +"/"+ totalTest +")");