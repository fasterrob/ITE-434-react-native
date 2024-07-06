function PlusNumber(num1:number,num2:number){
    let result:number = num1 + num2;
    let text: string = `The result of ${num1} + ${num2} is ${result}`
    let multipleString: string = `
        First Line
        Second Line
        And Third Line
    `;
    return `
        ${text} 
        ${multipleString}
    `;
}

console.log(PlusNumber(1,2));
