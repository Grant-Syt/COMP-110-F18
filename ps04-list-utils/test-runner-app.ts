// TODO: Add the honor code pledge with your name and onyen here.
/**    
 * Author: Grant Sytniak  
 * ONYEN: grantsyt
 * UNC Honor Pledge: I certify that no unauthorized assistance has been received   
 * or given in the completion of this work. I certify that I understand and 
 * could now rewrite on my own, without assistance from course staff,  
 * the problem set code I am submitting.
 */


/** Import Test Helpers */
import { print } from "introcs";
import { cons } from "introcs/list";
import { test, testList } from "./test-util";

// TODO: Import functions as you write them
import { 
    last, 
    valueAt, 
    max,
    scale,
    all,
    equals,
    arrayToList,
    concat,
    splice,
    sub
} from "./list-utils";

export let main = async () => {
    
    print("List Utils Tests");

    // Some simple lists data to test with.
    // You should add your own lists, too!
    let numbers1 = cons(1, null);
    let numbers11 = cons(1, cons(1, null));
    let numbers2 = cons(2, null);
    let numbers12 = cons(1, cons(2, null));
    let numbers121 = cons(1, cons(2, cons(1, null)));
    let numbers363 = cons(3, cons(6, cons(3, null)));

    let array1 = [1];
    let array121 = [1, 2, 1];
    let emptyArray: number[] = [];


    let stringsA = cons("A", null);
    let stringsAB = cons("A", cons("B", null));
    let stringsABC = cons("A", cons("B", cons("C", null)));
    let stringsABCD = cons("A", cons("B", cons("C", cons("D", null))));
    let stringsC = cons("C", null);
    let stringsCD = cons("C", cons("D", null));
    let stringsCDAB = cons("C", cons("D", cons("A", cons("B", null))));
    let stringsACDB = cons("A", cons("C", cons("D", cons("B", null))));

    // This constant is an alias for the smallest number possible.
    const MIN = Number.MIN_SAFE_INTEGER;

    // ================================    
    // Part 1. last
    print("Part 1. last");
    // Use Cases
    test("1.1 last(numbers1)", 1, last(numbers1));
    test("1.2 last(numbers12)", 2, last(numbers12));
    test("1.3 last(stringsA)", "A", last(stringsA));
    test("1.4 last(stringsAB)", "B", last(stringsAB));
    // Edge Cases
    test("1.5 last(null)", null, last(null));

    // ================================    
    // Part 2. valueAt
    print("Part 2. valueAt");
    // Use Cases
    test("2.1 valueAt(numbers121, 0)", 1, valueAt(numbers121, 0));
    test("2.2 valueAt(numbers121, 1)", 2, valueAt(numbers121, 1));
    test("2.3 valueAt(numbers121, 2)", 1, valueAt(numbers121, 2));
    test("2.4 valueAt(stringsABC, 0)", "A", valueAt(stringsABC, 0));
    test("2.5 valueAt(stringsABC, 1)", "B", valueAt(stringsABC, 1));
    test("2.6 valueAt(stringsABC, 2)", "C", valueAt(stringsABC, 2));
    // Edge Cases
    test("2.7 valueAt(numbers121, 3)", null, valueAt(numbers121, 3));
    test("2.8 valueAt(numbers121, -1)", null, valueAt(numbers121, -1));

    // ================================
    // Part 3. max
    // Use Cases
    print("Part 3. max");
    test("3.1 max(numbers1, MIN)", 1, max(numbers1, MIN));
    test("3.2 max(numbers121, MIN)", 2, max(numbers121, MIN));
    // Edge Cases
    test("3.2 max(null, MIN)", MIN, max(null, MIN));

    // TODO - You will need to write your own tests from here.

    // ================================
    // Part 4. all
    print("Part 4. all");
    // Use Cases - note, you will need to import this (and subsequent) function!
    test("4.1 all(numbers1, 1)", true, all(numbers1, 1));
    test("4.2 all(numbers121, 1)", false, all(numbers121, 1));
    // Edge Cases
    test("4.3 all(null, 1)", true, all(null, "A"));

    // ================================
    // Part 5. equals
    print("Part 5. equals");
    // Use Cases
    test("5.1 equals(numbers1, numbers1)", true, equals(numbers1, numbers1));
    test("5.1 equals(numbers1, numbers121)", false, equals(numbers1, numbers121));
    // Edge Cases
    test("5.1 equals(numbers1, null)", false, equals(numbers1, null));

    /** 
     * Ensure your equals function is correctly implemented before 
     * continuing further!
     */

    // ================================
    // Part 6. scale
    print("Part 6. scale");
    // Use Cases
    // One example is shown below:
    testList("scale(numbers1, 2)", numbers2, scale(numbers1, 2));
    testList("scale(numbers121, 3)", numbers363, scale(numbers121, 3));
    // Edge Cases
    testList("scale(null, 3)", null, scale(null, 3));
    
    // ================================
    // Part 7. arrayToList
    print("Part 7. arrayToList");
    // Use Cases
    testList("arrayToList(array1, 0)", numbers1, arrayToList(array1, 0));
    testList("arrayToList(array121, 0)", numbers121, arrayToList(array121, 0));
    // Edge Cases
    testList("arrayToList(emptyArray, 0)", null, arrayToList(emptyArray, 0));

    // ================================
    // Part 8. concat
    print("Part 8. concat");
    // Use Cases
    testList("concat(numbers1, numbers1)", numbers11, concat(numbers1, numbers1));
    testList("concat(numbers12, numbers1)", numbers121, concat(numbers12, numbers1));
    // Edge Cases
    testList("concat(numbers1, null)", numbers1, concat(numbers1, null));

    // ================================
    // Part 9. splice
    print("Part 9. splice");
    // Use Cases
    testList("splice(stringsAB, 0, stringsCD)", stringsCDAB, splice(stringsAB, 0, stringsCD));
    testList("splice(stringsAB, 1, stringsCD)", stringsACDB, splice(stringsAB, 1, stringsCD));
    // Edge Cases
    testList("splice(stringsAB, 1, null)", stringsAB, splice(stringsAB, 1, null));
    testList("splice(null, 1, stringsCD)", stringsCD, splice(null, 1, stringsCD));


    // ================================
    // Part 10. sub
    print("Part 10. sub");
    // Use Cases
    testList("sub(stringsABCD, 2, 1)", stringsC, sub(stringsABCD, 2, 1));
    testList("sub(stringsABCD, 2, 2)", stringsCD, sub(stringsABCD, 2, 2));
    // Edge Cases
    testList("sub(null, 2, 1)", null, sub(null, 2, 1));
};

main();