// const myArr = []
// %DebugPrint(myArr)

// continious, Holey 

// SMI (small integer)
// Packed element
// Double (float, string, function)

const arrTwo = [1, 2, 3, 4, 5];
// PACKED_SMI_ELEMENTS

arrTwo.push(6.0)
// PACKED_DOUBLE_ELEMENTS

arrTwo.push(7)
// PACKED_ELEMENTS

arrTwo[10] = 11
// HOLEY_ELEMENTS

console.log(arrTwo);
console.log(arrTwo.length);
console.log(arrTwo[9]);

// bound check
// hasOwnProperty(arrTwo, 9)
// hasOwnProperty(arrTwo.prototype, 10)
// hasOwnProperty(Object.prototype, 10)

// holes are very expensive in j
// in holey array all above checks are done ( hasOwnProperty is expensive check)
// in continuous , only bound check is done

const arrThree = [1, 2, 3, 4, 5]
console.log(arrThree[8]); // only does bound check and returns undefined 

// SMI > DOUBLE > PACKED
// H_SMI > H_DOUBLE > H_PACKED

const arrFour = new Array(3)
// just 3 holes . HOLEY_SMI_ElEMENTS
arrFour[0] = '1' // HOLEY_PACKED_ELEMENTS
arrFour[0] = '2' // HOLEY_PACKED_ELEMENTS
arrFour[0] = '3' // HOLEY_PACKED_ELEMENTS

const arrFive = []
arrFive.push('1')  // PACKED_ELEMENTS
arrFive.push('2')  // PACKED_ELEMENTS
arrFive.push('3')  // PACKED_ELEMENTS

const arrSix = [1, 2, 3, 4, 5]
arrSix.push(Infinity); 
// PACKED_DOUBLE_ELEMENTS

// for, for-of, forEach should be prefered rather than making by yourself