/**
 * Author: Grant Sytniak 
 *
 * ONYEN: grantsyt
 *
 * UNC Honor Pledge: I certify that no unauthorized assistance has been received
 * or given in the completion of this work. I certify that I understand and
 * could now rewrite on my own, without assistance from course staff,
 * the problem set code I am submitting.
 */


import { print, csvToArray, random } from "introcs";
import { makeBracket } from "./bracket";

// Player Class
export class Player {
    team: string = "";
    season: number = 0;
    conference: string = "";
    winPercent: number = 0;
    avgPoints: number = 0;
    player: string = "";
    gamesPlayed: number = 0;
    gamesStarted: number = 0;
    avgMinutesPerGame: number = 0;
    fieldGoalPercent: number = 0; // field goals; all goals except free throws
    twoPointPercent: number = 0;
    threePointPercent: number = 0;
    freeThrowPercent: number = 0;
    avgReboundsPerGame: number = 0;
    avgAssistsPerGame: number = 0;
    avgStealsPerGame: number = 0;
    avgBlocksPerGame: number = 0;
    avgTurnoversPerGame: number = 0;
    avgPointsPerGame: number = 0;
    coach: string = "";
}

// Functional Interfaces

// use with filter
interface Predicate<T> {
    (item: T): boolean;
}    

// use with reduce
interface Reducer<T, U> {
    (memo: U, item: T): U;
}

// use with map
interface Transform<T, U> {
    (item: T): U;
}

export let main = async () => {
    let data = await csvToArray("NCAA Data", Player);


    // TODO: 2.8 Print Report -- using: getSeasonMVP, avgTotalPoints, and numAboveAvgPts
    print("1. Season MVP:");
    print(getSeasonMVP(data));
    print("2. Average number of points scored by all players: " + avgTotalPoints(data));
    print("3. Total number of players who scored above the average number of points: " + numAboveAvgPoints(data));
    // TODO: 3.3 Generate Bracket -- Use makeBracket
    makeBracket(winner, data);

};

// TODO: 1.1-1.3 Filter, Map, Reduce

// Filter
export let filter = <T>(array: T[], predicate: Predicate<T>): T[] => {
    let array2 = [];
    for (let i = 0; i < array.length; i++) {
        if (predicate(array[i])) {
            array2[array2.length] = array[i];
        }
    }
    return array2;
};
// Map
export let map = <T, U>(array: T[], transform: Transform<T, U>): U[] => {
    let array2 = [];
    for (let i = 0; i < array.length; i++) {
        array2[array2.length] = transform(array[i]);
    }
    return array2;
};

// Reduce
export let reduce = <T, U>(array: T[], reduce: Reducer<T, U>, memo: U): U => {
    for (let i = 0; i < array.length; i++) {
        memo = reduce(memo, array[i]);
    }
    return memo;
};

// TODO: 2.1 reduceByPoints
export let reduceByMaxPoints = (player1: Player, player2: Player): Player => {
    if (player1.avgPointsPerGame > player2.avgPointsPerGame) {
        return player1;
    } else {
        return player2;
    }
};

// TODO: 2.2 getSeasonMVP
export let getSeasonMVP = (players: Player[]): Player => {
    let MVP = players[0];
    for (let i = 1; i < players.length; i++) {
        MVP = reduceByMaxPoints(MVP, players[i]);
    }
    return MVP;
};

// TODO: 2.3 mapToPoints
export let mapToPoints = (player: Player): number => {
    return player.avgPointsPerGame;
};

// TODO: 2.4 sum
export let sum = (a: number, b: number): number => {
    return a + b;
};

// TODO: 2.5 avgTotalPoints
export let avgTotalPoints = (players: Player[]): number => {
    let pointsArray = [];
    pointsArray = map(players, mapToPoints);
    return reduce(pointsArray, sum, 0) / players.length;
};

// TODO 2.6 aboveAvgPoints
export let aboveAvgPoints = (player: Player): boolean => {
    return player.avgPointsPerGame > 6.094696156323789;
};

// TODO 2.7 numAboveAvgPoints
export let numAboveAvgPoints = (players: Player[]): number => {
    let aboveAvgPlayers = filter(players, aboveAvgPoints);
    return aboveAvgPlayers.length;
};

// TODO: 3.1 playerScorer
export let playerScorer = (player: Player): number => {
    let luck = (random(1, 3) + player.freeThrowPercent) + (player.coach.length % 2 * 3);
    let charisma = (player.gamesPlayed + player.gamesStarted + player.avgMinutesPerGame) / 3;
    let strength = (player.avgReboundsPerGame + player.avgBlocksPerGame + player.avgPointsPerGame) / 3;
    return luck + charisma + strength;
};

// TODO 3.2 winner
export let winner = (team1: string, team2: string, players: Player[]): string => {
    let playersOnTeam1 = filter(players, (player: Player) => (player.team === team1));
    let playersOnTeam2 = filter(players, (player: Player) => (player.team === team2));
    let team1Scores = map(playersOnTeam1, playerScorer);
    let team2Scores = map(playersOnTeam2, playerScorer);
    let team1ScoreTotal = reduce(team1Scores, sum, 0);
    let team2ScoreTotal = reduce(team2Scores, sum, 0);
    if (team2ScoreTotal > team1ScoreTotal) {
        return team2;
    } else {
        return team1;
    }
};

main();