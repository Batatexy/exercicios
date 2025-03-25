type romanType = 
{
    symbol: string,
    value: number,
}

interface InterfaceRomanToIntegerConverter 
{
    romanStringToDecimalNumber: (romanString: string) => number;
}
  
class RomanToIntegerConverter implements InterfaceRomanToIntegerConverter
{
    constructor() {}

    romanStringToDecimalNumber(romanString: string): number
    {
        let arrayRomanString: Array<string> = romanString.toUpperCase().split("");
        let arrayRomanRomanType: Array<romanType> = [];
        let roman: romanType;
        
        arrayRomanString.forEach(item =>
        {
            switch(item)
            {
                case "I":
                    roman = {symbol: "I", value: 1,};
                    break;
                case "V":
                    roman = {symbol: "V", value: 5,};
                    break;
                case "X":
                    roman = {symbol: "X", value: 10,};
                    break;
                case "L":
                    roman = {symbol: "L", value: 50,};
                    break;
                case "C":
                    roman = {symbol: "C", value: 100,};
                    break;
                case "D":
                    roman = {symbol: "D", value: 500,};
                    break;
                case "M":
                    roman = {symbol: "M", value: 1000,};
                    break;
                default:
                    console.error(item + ": Inválido");
                    return;
            }

            arrayRomanRomanType.push(roman)
        });

        let decimalNumber: number = 0;

        for(let i: number = 0; i < arrayRomanRomanType.length; i++)
        {
            if (arrayRomanRomanType[i+1])
            {
                if (arrayRomanRomanType[i].value < arrayRomanRomanType[i+1].value)
                {
                    decimalNumber += (arrayRomanRomanType[i+1].value - arrayRomanRomanType[i].value);
                    i++;
                }
                else
                {
                    decimalNumber += (arrayRomanRomanType[i].value);
                }
            }
            else
            {
                decimalNumber += (arrayRomanRomanType[i].value);
            }
        }

        return decimalNumber;
    }
}

// I: 1
// X: 10
// L: 50
// C: 100
// D: 500
// M: 1000

let converter = new RomanToIntegerConverter();
let arrayRomanNumbers: Array<string> = 
[
    "I",
    "II",
    "III",
    "IV",
    "V",
    "VI",
    "VII",
    "VIII",
    "IX",
    "X",
    "XI",
    "XII",
    "XIII",
    "XIV",
    "XV",
    "XVI",
    "XVII",
    "XVIII",
    "XIX",
    "XX",

    "CDXCVIII",
    "MCMXCIV",
]

console.clear();
console.log("\n================")
arrayRomanNumbers.forEach(number => 
{
    console.log(converter.romanStringToDecimalNumber(number));
});



function verify <T> (valor: T): string
{
    return typeof(valor);
}

console.log(verify(1))
console.log(verify("a"))
console.log(verify([1,2,3]))
console.log(verify([1,2,3,"A"]))
console.log(verify({nome: "Carlos", idade: 24}))
console.log(verify({array: [1,2,3,"A"], nome: "Carlos"}))


  