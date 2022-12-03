// * custom types
type Combinable = number | string;
// * literal type
type ConversionDescriptor = 'as-number' | 'as-string';

function combine(input1: Combinable,
                 input2: Combinable,
                 combineType: ConversionDescriptor) {
    let res;
    if (typeof input1 === 'number' && typeof input2 === 'number' || combineType === 'as-number') {
        res = +input1 + +input2;
    } else {
        res = input1.toString() + input2.toString();
    }
    // if (combineType === 'as-number') {
    //     return +res;
    // } else {
    //     return res.toString();
    // }
    return res;

}

const combinedAges = combine('30', 35, 'as-number');
console.log(combinedAges);
const combineNames = combine('Mary', 'Jane', 'as-string');
console.log(combineNames)