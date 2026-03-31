function circleArea(raio) {
    return 3.145926535897932 * (raio ** 2);
}


function calculator(num1, num2, operator) {
    switch (operator) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            return num1 / num2;
        default:
            return 'Invalid operator';
    }
}

function typeTriangle(confirmation, lad1, lad2, lad3) {
    if (confirmation === true) {
        if (lad1 === lad2 && lad2 === lad3) {
        return 'equilateral';
    } else if (lad1 === lad2 && lad1 != lad3 || lad2 == lad3 && lad2 != lad1 || lad3 === lad1 && lad3 != lad2) {
        return 'isosceles';
    } else {
        return 'scalene';
    } 
    } else {
        return 'None';
    }
}

function isTriangle(lad1, lad2, lad3) {
    if (lad1 + lad2 > lad3 && lad2 + lad3 > lad1 && lad3 + lad1 > 2) {
        return true;
    }
    else {
        return false;
    }

}
export { circleArea, calculator, isTriangle, typeTriangle };