// Meta exercice

import {mySplit} from "./air00.mjs";

console.log(mySplit("Fear Of The Dark"));

// Get file name
const args = process.argv;
const arr = args[1].split('/');
console.log(arr[arr.length - 1]);