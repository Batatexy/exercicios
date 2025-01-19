type romanType = 
{
    symbol: string,
    value: number,
}

function romanStringToDecimalNumber(romanString: string): number
{
    let arrayRomanString: Array<string> = romanString.toUpperCase().split("");
    let arrayRomanRomanType: Array<romanType> = [];
    let roman: romanType;
    
    arrayRomanString.forEach(item =>
    {
        switch(item)
        {
            case "I":
                roman = {symbol: "I", value: 1,}
                break;

            case "V":
                roman = {symbol: "V", value: 5,}
                break;

            case "X":
                roman = {symbol: "X", value: 10,}
                break;

            case "L":
                roman = {symbol: "L", value: 50,}
                break;

            case "C":
                roman = {symbol: "C", value: 100,}
                break;

            case "D":
                roman = {symbol: "D", value: 500,}
                break;

            case "M":
                roman = {symbol: "M", value: 1000,}
                break;
        }

        arrayRomanRomanType.push(roman)
    });

    let decimalNumber: number = 0;

    for(let i: number = 0; i < arrayRomanRomanType.length; i++)
    {
        //console.log("Poisição", i + ":" , decimalNumber)
        if (arrayRomanRomanType[i+1])
        {
            if (arrayRomanRomanType[i+2])
            {
                if (arrayRomanRomanType[i+1].value < arrayRomanRomanType[i+2].value)
                {
                    decimalNumber += (arrayRomanRomanType[i].value);
                }
                else
                {
                    if (arrayRomanRomanType[i].value < arrayRomanRomanType[i+1].value)
                    {
                        decimalNumber += (arrayRomanRomanType[i+1].value - arrayRomanRomanType[i].value);
                    }
                    else
                    {
                        decimalNumber += (arrayRomanRomanType[i].value + arrayRomanRomanType[i+1].value);
                    }
        
                    i++;
                }
            }
            else
            {
                if (arrayRomanRomanType[i].value < arrayRomanRomanType[i+1].value)
                {
                    decimalNumber += (arrayRomanRomanType[i+1].value - arrayRomanRomanType[i].value);
                }
                else
                {
                    decimalNumber += (arrayRomanRomanType[i].value + arrayRomanRomanType[i+1].value);
                }
    
                i++;
            }
        }
        else
        {
            decimalNumber += (arrayRomanRomanType[i].value);
        }
    }

    return decimalNumber;
}

// I: 1
// X: 10
// L: 50
// C: 100
// D: 500
// M: 1000

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
    console.log(romanStringToDecimalNumber(number));
});



