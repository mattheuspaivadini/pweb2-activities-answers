import { isTriangle, typeTriangle } from './functions.js';

let lad1 = 3;
let lad2 = 4;
let lad3 = 5;

const isTriangleResult = isTriangle(lad1, lad2, lad3);

const answer = typeTriangle(isTriangleResult, lad1, lad2, lad3);

console.log(answer)