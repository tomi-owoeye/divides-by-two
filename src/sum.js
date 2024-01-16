/** Adds two given numbers, returning the sum.
 * @param {number} a
 * @param {number} b
 * @returns {number} the sum of a and b
 */
function sum(a, b) {
    return a + b;
}

export { sum };


//Write a function which takes a number, n, and repeatedly divides it by 2 until the result is 1 or smaller.  

//It should return the count of the number of divisions that were made.

//You can assume n will always be greater than 0.


function divideCount(n) {
    let count = 0;

    while (n > 1) {
        n = n / 2;
        count++;
    }

    return count;

}

//const result = countDivisions(30);
//console.log(result);