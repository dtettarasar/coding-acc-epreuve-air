// Meta exercice

const test00 = require('./air00.js')();
const test01 = require('./air01.js')();
const test02 = require('./air02.js')();
const test03 = require('./air03.js')();
const test04 = require('./air04.js')();
const test05 = require('./air05.js')();
const test06 = require('./air06.js')();
const test07 = require('./air07.js')();
const test08 = require('./air08.js')();
const test09 = require('./air09.js')();
const test10 = require('./air10.js')();
const test11 = require('./air11.js')();
const test12 = require('./air12.js')();

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
testStarter("air04", test04);
testStarter("air05", test05);
testStarter("air06", test06);
testStarter("air07", test07);
testStarter("air08", test08);
testStarter("air09", test09);
testStarter("air10", test10);
testStarter("air11", test11);
testStarter("air12", test12);
console.log( "\x1b[37m", "Total success: ("+ totalSuccesses +"/"+ totalTest +")");