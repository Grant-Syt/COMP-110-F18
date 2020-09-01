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

import { print, promptNumber, promptString } from "introcs";

export let main = async () => {
    
    // Initializing variables
    let alive = true;
    let thirstLevel = 50;
    let bearLikeliness = 50;
    let isHarvestTime = false;
    let beetsCount = 10;
    let day = 0;

    // Loop
    while (isHarvestTime === false && alive === true) {
        print("Day: " + day );
        let waterSprayOrHarvest = await promptString("Do you want to water, spray, or harvest your " + beetsCount + " beets? Type 'water', 'spray', or 'harvest'.");
        if (waterSprayOrHarvest === "water") {
            print("Your " + beetsCount + " beets have been watered!");
            thirstLevel = thirstLevel - 10;
            bearLikeliness = bearLikeliness + 10;
            beetsCount = beetsCount + 2;
                } else if (waterSprayOrHarvest === "spray") {
                print("Your " + beetsCount + " beets have been sprayed!");
                thirstLevel = thirstLevel + 10;
                bearLikeliness = bearLikeliness - 5;
                    } else if (waterSprayOrHarvest === "harvest") {
                    print("Your " + beetsCount + " beets have been harvested!");
                    isHarvestTime = true;
                        } else {
                            print("Your " + beetsCount + " beets were not watered, sprayed, or harvested.");
                            thirstLevel = thirstLevel + 10;
                            bearLikeliness = bearLikeliness + 10;
                }
        if (thirstLevel <= 0) {
            alive = false;
            print("Your " + beetsCount + " beets have been overwatered");
        }
        if (thirstLevel >= 101) {
            alive = false;
            print("Your " + beetsCount + " beets have been dehydrated");
        }
        if (bearLikeliness >= 100) {
            alive = false;
            print("Your " + beetsCount + " beets have been eaten by bears");
        }
        if (isHarvestTime === false && alive === true) {
            print("Your " + beetsCount + " beets are alive!");
            print("Thirst Level of " + beetsCount + " beets: " + thirstLevel);
            print("Likeliness of Bear Attack of " + beetsCount + " beets: " + bearLikeliness);
            day++;
        }
        
    }
    // Results
    if (isHarvestTime === true && alive === true) {
        print("Your " + beetsCount + " beets were harvested after " + (day + 1) + " days :)");
    }
    if (isHarvestTime === false && alive === false) {
        print("Your " + beetsCount + " beets have died after " + (day + 1) + " days :(");
    }

};

main();