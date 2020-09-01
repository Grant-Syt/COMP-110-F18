
/*
* Author: Grant Sytniak 
* ONYEN: grantsyt
* UNC Honor Pledge: I certify that no unauthorized assistance has been received 
* or given in the completion of this work. I certify that I understand and 
* could now rewrite on my own, without assistance from course staff, 
* the problem set code I am submitting. 
*/

import { print, csvToArray } from "introcs";
import { TSModuleBlock } from "babel-types";

class Clue {
    person: string = "";
    hairColor: string = "";
    weapon: string = "";
    desk: number = 0;
    note: string = "";
    hasPencil: boolean = false;
}
export let main = async () => {
    let data: Clue[] = await csvToArray("Clue Data", Clue);
    // TODO: Your function calls go inside of this block
    // let filtered: Clue[] = filterOutBlonde(data);
    // print(filtered);
    // let clue1: string = findClue1(data);
    // print("Clue 1: " + clue1);
    // let x: number[] = [1, 2, 3];
    // print(sum(x)); // prints 6
    // let x: number[] = [1, 2, 3];
    // print(average(x)); // prints 2
    // let filtered: Clue[] = filterAboveDeskNumber(data, 20);
    // print(filtered); // Only displays clues whose desk property is greater than 20
    // let filtered: Clue[] = filterByHairColor(data, "blue");
    // print(filtered); // Only displays clues whose hair color property is blue
    // let deskNumbers: number[] = mapToDeskNumber(data);
    // print(deskNumbers); // Only displays the desk numbers of each Clue
    // let clue2: string = findClue2(data);
    // print("Clue 2: " + clue2);
    let thief: string = findThief(data);
    print("Thief: " + thief);
};
// TODO: Define your functions here

// Walk

export let filterOutBlonde = (a: Clue[]): Clue[] => {
    let b: Clue[] = [];
    for (let i = 0; i < a.length; i++) {
        if (a[i].hairColor !== "blonde") {
            b[b.length] = a[i];
        }
    }
    return b;
};

export let nth = (a: Clue[], b: number): Clue => {
    return a[b];
};

export let findClue1 = (a: Clue[]): string => {
    return (nth(filterOutBlonde(a), 4)).note;
};

// Jog

export let sum = (a: number[]): number => {
    let b = 0;
    for (let i = 0; i < a.length; i++) {
        b += a[i];
    }
    return b;
};

export let average = (a: number[]): number => {
    return sum(a) / a.length;
};

export let filterAboveDeskNumber = (a: Clue[], b: number): Clue[] => {
    let c: Clue[] = [];
    for (let i = 0; i < a.length; i++) {
        if (a[i].desk > b) {
            c[c.length] = a[i];
        }
    }
    return c;
};

export let filterByHairColor = (a: Clue[], b: string): Clue[] => {
    let c: Clue[] = [];
    for (let i = 0; i < a.length; i++) {
        if (a[i].hairColor === b) {
            c[c.length] = a[i];
        }
    }
    return c;
};

export let mapToDeskNumber = (a: Clue[]): number[] => {
    let b = [];
    for (let i = 0; i < a.length; i++) {
        b[i] = a[i].desk;
    }
    return b;
};

export let findClue2 = (a: Clue[]): string => {
    let colorfilter = filterByHairColor(a, "brown");
    print(colorfilter);
    let desks = mapToDeskNumber(a);
    print(desks);
    let averageOfDesks = average(desks);
    print(averageOfDesks);
    let answer = filterAboveDeskNumber(colorfilter, averageOfDesks);
    print(answer);
    return answer[2].note;
};

export let hasPencil = (a: Clue[]): Clue[] => {
    let c: Clue[] = [];
    for (let i = 0; i < a.length; i++) {
        if (a[i].hasPencil === true) {
            c[c.length] = a[i];
        }
    }
    return c;
};

export let usesChili = (a: Clue[]): Clue[] => {
    let c: Clue[] = [];
    for (let i = 0; i < a.length; i++) {
        if (a[i].weapon === "chili") {
            c[c.length] = a[i];
        }
    }
    return c;
};

export let findThief = (a: Clue[]): string => {
    let pencilusers = hasPencil(a);
    let finalobject = usesChili(pencilusers);
    return finalobject[0].person;
};

main();