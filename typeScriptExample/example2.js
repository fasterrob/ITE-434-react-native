function PlusNumber(num1, num2) {
    var result = num1 + num2;
    var text = "The result of ".concat(num1, " + ").concat(num2, " is ").concat(result);
    var multipleString = "\n        First Line\n        Second Line\n        And Third Line\n    ";
    return "\n        ".concat(text, " \n        ").concat(multipleString, "\n    ");
}
console.log(PlusNumber(1, 2));
