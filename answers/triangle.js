import { isTriangle, typeTriangle } from '../functions.js';

let lad1 = 3;
let lad2 = 4;
let lad3 = 5;

let istriangle = isTriangle(lad1, lad2, lad3);

let answer = typeTriangle(istriangle, lad1, lad2, lad3)

console.log(answer)