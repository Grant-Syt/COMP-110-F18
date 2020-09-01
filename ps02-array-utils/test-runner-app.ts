// TODO: Add Honor Code Header
/*
*
*Author: Grant Sytniak
*
*ONYEN: grantsyt
*
*UNC Honor Pledge: I certify that no unauthorized assistance has been recieved
*or given in the completion of this work. I certify that I understand and
*could now rewrite on my own, without assistance from course staff, 
*the problem set code I am submitting.
*/

/** Import Test Helpers */
import { testNumber, testBoolean, testArray } from "./test-util";

// TODO: Import functions as you write them
import { count, max, has, all, equals, cycle, concat, sub, splice } from "./array-utils";

export let main = async () => {

    // Part 1. count
    // Use Cases
    testNumber("count([10, 20], 20)", 1, count([10, 20], 20));
    testNumber("count([20, 20], 20)", 2, count([20, 20], 20));
    // Edge Cases
    testNumber("count([], 20)", 0, count([], 20));
    testNumber("count([10, 30], 20)", 0, count([10, 30], 20));

    // TODO: Add tests for parts as you work through each

    // 2. max
    // Use Cases
    testNumber("max([1, 2, 3])", 3, max([1, 2, 3]));
    testNumber("max([1, 1])", 1, max([1, 1]));
    // Edge Cases
    testNumber("max([])", Number.MIN_VALUE, max([]));
    testNumber("max([1])", 1, max([1]));

    // 3. has
    // Use Cases
    testBoolean("has([1, 2, 3], 3)", true, has([1, 2, 3], 3));
    testBoolean("has([1, 2, 3], 4)", false, has([1, 2, 3], 4));
    // Edge Cases
    testBoolean("has([1, -1], 0)", false, has([1, -1], 0));
    testBoolean("has([], 0)", false, has([], 0));
    
    // 4. all
    // Use Cases
    testBoolean("all([1, 1, 1], 1)", true, all([1, 1, 1], 1));
    testBoolean("all([0, 1], 0)", false, all([0, 1], 0));
    // Edge Cases
    testBoolean("all([1, 0, 1], 1)", false, all([1, 0, 1], 1));
    testBoolean("all([], 0)", false, all([], 0));
    
    // 5. equals
    // Use Cases
    testBoolean("equals([1, 2, 3], [1, 2, 3])", true, equals([1, 2, 3], [1, 2, 3]));
    testBoolean("equals([1, 1], [2, 2])", false, equals([1, 1], [2, 2]));
    // Edge Cases
    testBoolean("equals([], [])", true, equals([], []));
    testBoolean("equals([2, 1], [1, 2])", false, equals([2, 1], [1, 2]));
    
    // 6. cycle
    // Use Cases
    testArray("cycle(3,3)", [1, 2, 3], cycle(3, 3));
    testArray("cycle(1,3)", [1, 1, 1], cycle(1, 3));
    // Edge Cases
    testArray("cycle(3,0)", [], cycle(3, 0));
    testArray("cycle(-3,3)", [], cycle(-3, 3));
    
    // 7. concat
    // Use Cases
    testArray("concat([1], [1])", [1 , 1], concat([1], [1]));
    testArray("concat([2, 4, 6], [2, 4, 6])", [2, 4, 6, 2, 4, 6], concat([2, 4, 6], [2, 4, 6]));
    // Edge Cases
    testArray("concat([],[])", [], concat([], []));
    testArray("concat([1, 2, 3],[-1, -2, -3])", [1, 2, 3, -1, -2, -3], concat([1, 2, 3], [-1, -2, -3]));
    
    // 8. sub
    // Use Cases
    testArray("sub([1, 2, 3], 0, 3)", [1, 2, 3], sub([1, 2, 3], 0, 3));
    testArray("sub([0, 1, 2, 3, 4], 1, 4)", [1, 2, 3], sub([0, 1, 2, 3, 4], 1, 4));
    // Edge Cases
    testArray("sub([1, 2, 3], 0, 6)", [1, 2, 3], sub([1, 2, 3], 0, 6));
    testArray("sub([1, 2, 3], -3, 2)", [1, 2], sub([1, 2, 3], -3, 2));
    testArray("sub([], 1, 2)", [], sub([], 1, 2));

    // 9. splice
    // Use Cases
    testArray("splice([1, 2, 3], 1, [10])", [1, 10, 2, 3], splice([1, 2, 3], 1, [10]));
    testArray("splice([1, 2, 3], 2, [4, 5])", [1, 2, 4, 5, 3], splice([1, 2, 3], 2, [4, 5]));
    // Edge Cases
    testArray("splice([1, 2, 3], -3, [-1, 0])", [-1, 0, 1, 2, 3], splice([1, 2, 3], -3, [-1, 0]));
    testArray("splice([1, 2, 3], 5, [4])", [1, 2, 3, 4], splice([1, 2, 3], 5, [4]));

};

main();