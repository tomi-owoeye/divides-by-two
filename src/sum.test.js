import { divideCount } from "./sum.js";

// jest docs for expect "matchers"
// https://jestjs.io/docs/expect

test("divisible by 2", (30) => {
    expect(divideCount(30)).toBe(1);
});

test("divisible by 2", (20) => {
    expect(divideCount(20)).toBe(2);
});
