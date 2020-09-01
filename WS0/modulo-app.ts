import { print, promptString } from "introcs";

export let main = async () => {

print (modulo(200, 19));

};

let modulo = (x: number, y: number): number => {
    let i = 0;
    while ((y * i) < x) {
        i = i + 1;
    }
    if ((y * i) === x) {
        return 0;
    } else {
        return (x - (y * (i - 1)));
    }
    
};

main();