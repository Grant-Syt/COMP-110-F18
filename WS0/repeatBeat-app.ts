import { print, promptNumber } from "introcs";

export let main = async () => {

print (repeatBeat("Whoop" , 1000));

};

let repeatBeat = (input: string, n: number): string => {
if (n === 0) {
    return "";
} else {
    let temp: string = "";
    while (n > 1) {
        temp = temp + input + " ";
        n = n - 1;
    }
    temp = temp + input;
    return temp;
}
};

main();
