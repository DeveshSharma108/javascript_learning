// These lines are comparing numbers using relational operators.
console.log(2 > 1);  // true
console.log(2 >= 1); // true
console.log(2 < 1);  // false
console.log(2 == 1); // false
console.log(2 != 1); // true
console.log()

// These lines compare a string to a number. JavaScript attempts to convert the string to a number before comparing.
console.log("2" > 1);  // true, "2" becomes 2 which is greater than 1.
console.log("02" > 1); // true, "02" becomes 2 which is greater than 1.
console.log()

// Comparisons involving null.
console.log(null > 0);  // false, null is not greater than 0.
console.log(null == 0); // false, null is only loosely equal to undefined.
console.log(null >= 0); // true, because null is converted to 0 in relational comparison.
console.log()

// Comparisons involving undefined.
console.log(undefined == 0); // false, undefined is only loosely equal to null.
console.log(undefined > 0);  // false, undefined cannot be converted to a number.
console.log(undefined < 0);  // false, undefined cannot be converted to a number.
console.log()

// Strict equality comparison.
console.log("2" === 2); // false, because "2" is a string and 2 is a number.

console.log(Number(null)=="0")
console.log(Number(null)==="0")
console.log()
console.log(null==undefined)    // comparing null and undefined
console.log(null===undefined)
console.log(null>undefined)
console.log(null<=undefined)

// comparsion operators <,>,<=,>= works different than equality check comparison convert null to number as 0
