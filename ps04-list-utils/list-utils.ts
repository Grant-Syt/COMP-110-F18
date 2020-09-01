// TODO: Add the honor code pledge with your name and onyen here.
/**    
 * Author: Grant Sytniak  
 * ONYEN: grantsyt
 * UNC Honor Pledge: I certify that no unauthorized assistance has been received   
 * or given in the completion of this work. I certify that I understand and 
 * could now rewrite on my own, without assistance from course staff,  
 * the problem set code I am submitting.
 */


import { Node, cons, first, rest } from "introcs/list";
import { react } from "babel-types";

export let last = <T>(list: Node<T>): T => {
    if (list === null) {
        return null;
    } else if (rest(list) === null) {
        return first(list);
    } else {
        return last(rest(list));
    }
};

export let valueAt = <T>(list: Node<T>, index: number): T => {
    if (list === null) {
        return null;
    } else if (index === 0) {
        return first(list);
    } else {
        return valueAt(rest(list), index - 1);
    }
};

export let max = (list: Node<number>, record: number): number => {
    if (list === null) {
        return record;
    }
    if (first(list) > record) {
        return max(rest(list), first(list));
    } else {
        return max(rest(list), record);
    }
};

export let all = <T>(list: Node<T>, value: T): boolean => {
    if (list === null) {
        // last node or empty
        return true;
    } else if (first(list) === value) {
        return all(rest(list), value);
    } else {
        // didn't reach last node
    return false;
    }
};

export let equals = <T>(a: Node<T>, b: Node<T>): boolean => {
    if (a === null && b === null) {
        return true;
    } else if (a === null || b === null) {
        return false;
    } else if (first(a) === first(b)) {
        return equals(rest(a), rest(b));
    } else {
        // didn't reach last node
        return false;
    }
};

export let scale = (list: Node<number>, factor: number): Node<number> => {
    if (list === null) {
        return null;
    } else {
    return cons(first(list) * factor, scale(rest(list), factor));
    }
};

// Part 7. arrayToList
export let arrayToList = <T>(array: T[], index: number): Node<T> => {
    if (array.length === index) {
        return null;
    } else {
    return cons(array [index], arrayToList(array, index + 1));
    }
};

// Part 8. concat
export let concat = <T>(a: Node<T>, b: Node<T>): Node<T> => {
    if (a === null) {
        return b;
    } else {
        return cons(first(a), concat(rest(a), b));
    }
};

// Part 9. sub
export let sub = <T>(list: Node<T>, index: number, length: number): Node<T> => {
    if (length === 0 || list === null) {
        // finish list
        return null;
    } else if (index === 0) {
        // start recoding
        return cons(first(list), sub(rest(list), index, length - 1));
    } else {
        // ignore nodes before index
        return sub(rest(list), index - 1, length);
    }
};

// Part 10. splice
export let splice = <T>(list: Node<T>, index: number, node: Node<T>): Node<T> => {
    if (list === null) {
        // empty list is dumb
        return node;
    }
    if (node === null) {
    // finish list
    return list;
    } else if (index === 0) {
    // insert second list
        return cons(first(node), splice(list, index, rest(node)));
    } else {
    // record nodes before index
    return cons(first(list), splice(rest(list), index - 1, node));
    }
};
