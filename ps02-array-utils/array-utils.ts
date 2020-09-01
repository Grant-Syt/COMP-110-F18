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

/*
 * 1. count
 * Given an array of numbers and a number to search for, returns a count of the
 * number of times the number occurs in the array.
 */
export let count = (a: number[], b: number): number => {
    let c = 0;
    for (let i = 0; i < a.length; i++) {
        if (b === a[i]) {
            c++;
        }
    }
    return c;
};

/*
 *  TODO: Define and export functions 2 - 9.
 */

// 2. max
export let max = (a: number[]): number => {
    if (a.length === 0) {
        return Number.MIN_VALUE;
    } else {
        let c = a[0];
        for (let i = 0; i < a.length; i++) {
            if (a[i + 1] > c) {
                c = a[i + 1];
            }
        }
        return c;
    }
};

// 3. has
export let has = (a: number[], b: number): boolean => {
    for (let i = 0; i < a.length; i++) {
        if (a[i] === b) {
            return true;
        }

    }
    return false;

};

// 4. all
export let all = (a: number[], b: number): boolean => {
    if (a.length === 0) {
        return false;
    } else {
        let every = 0;
        for (let i = 0; i < a.length; i++) {
            if (a[i] === b) {
                every++;
            }
        }
        if (every === a.length) {
            return true;
        } else {
            return false;
        }
    }
};


// 5. equals
export let equals = (a: number[], b: number[]): boolean => {
    if (a.length !== b.length) {
        return false;
    } else {
        let same = 0;
        for (let i = 0; i < a.length; i++) {
            if (a[i] === b[i]) {
                same++;
            }
        }
        if (same === a.length) {
            return true;
        } else {
            return false;
        }
    }
};


// 6. cycle
//     for (let i = 0; i < b; i++) {
//         for (let i = 0; i < a; i++) {
//             c[i] = i + 1;
//         }
//     }
//     return c;
export let cycle = (a: number, b: number): number[] => {
    if (a <= 0 || b <= 0) {
        return [];
    } else {
        let c: number[] = [];
        let counter = 0;
        for (let i = 0; i < b; i++) {
            if (i % a === 0) {
                c[i] = 1;
                counter = 0;
            } else {
                c[i] = counter + 1;
            }
            if (c.length === b) {
                return c;
            }
            counter++;
        }
        return c;
    }
};

// 7. concat
export let concat = (a: number[], b: number[]): number[] => {
    let c: number[] = [];
    for (let i = 0; i < a.length; i++) {
        c[i] = a[i];
    }    
    for (let i = 0; i < b.length; i++) {
            c[a.length + i] = b[i];
    }
    return c;
};


// 8. sub
export let sub = (a: number[], b: number, c: number): number[] => {
    if (a.length === 0) {
        return [];
    }
    if (b < 0) {
        b = 0;
    }
    if (c > a.length) {
        c = a.length;
    }
    let d: number[] = [];
    let counter = b;
    for (let i = 0; i < a.length; i++) {
        if (counter < c) {
        d[i] = a[counter];
        }
        counter++;
    }
    return d;
};


// 9. splice
export let splice = (a: number[], b: number, c: number[]): number[] => {
    if (b - 1 > a.length) {
        b = a.length + 1;
    }
    if (b < 0) {
        b = 0;
    }
    let d: number[] = [];
    if (b === 0) {
        d = concat(c, a);
    } else if (b > 0 && b < a.length + 1) {
        for (let i = 0; i < b; i++) {
            d[i] = a[i];
        }
        d = concat(d, c);
        let e = b;
        for (let i = d.length; i < a.length + c.length; i++) {
        d[i] = a[e];
        e++;
        }
    } else {
        d = concat(a, c);
    }
    return d;
};
