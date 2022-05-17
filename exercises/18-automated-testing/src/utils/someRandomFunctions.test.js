/**
 * Each file has it's own scope. I can't access something from another
 * file unless I import it, because it is out of scope.
 * Including the functions from `exercises/27-unit-testing/unit-testing.js`
 * so that I can test.
 */
import {
  add,
  subtract,
  isEvenNumber,
  findAdults,
} from "./someRandomFunctions.js";

describe("Unit Testing", () => {
  // Example
  describe("add", () => {
    test("should add two numbers", () => {
      const sum = add(2, 3);
      expect(sum).toBe(5);
    });
  });

  describe("subtract", () => {
    test("should subtract two numbers", () => {
      const sum = subtract(4, 2);
      expect(sum).toBe(2);
    });
  });

  describe("isEvenNumber", () => {
    test("should check if number is even", () => {
      const num = isEvenNumber(4);
      expect(num).toBe(true);
    });
  });

  describe("isEvenOdd", () => {
    test("should check if number is odd", () => {
      const num = isEvenNumber(5);
      expect(num).toBe(false);
    });
  });

  describe("findAdults", () => {
    test("will find, in a multidimensional array, all the people older than 18", () => {
      const people = [
        { name: "Janet", age: 43 },
        { name: "Aiden", age: 10 },
        { name: "Chloe", age: 16 },
      ];

      const findOldPeople = findAdults(people);
      expect(findOldPeople).toEqual([{ name: "Janet", age: 43 }]);
    });

    test("will return an empty array if no adults are found", () => {
      const people = [
        { name: "Liam", age: 3 },
        { name: "Emma", age: 17 },
        { name: "Ethan", age: 8 },
      ];
      const findYoungPeople = findAdults(people);
      expect(findYoungPeople).toEqual([]);
    });
  });
});
