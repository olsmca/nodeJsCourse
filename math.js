function add(x, y){
    return x +y
}

function substract(x, y) {
    return x - y
}

function multiply(x, y) {
    return x * y
}

function divide(x,y) {
    if(x == 0){
        return "Nose puede dividir por 0";
    }else {
        return x/y
    }
}

exports.add = add;
exports.divide = divide;
exports.multiply = multiply;
exports.substract = substract;