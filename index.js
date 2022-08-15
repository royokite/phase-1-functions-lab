// Code your solution in this file!
function distanceFromHqInBlocks(distanceBlocks) {
    if (distanceBlocks > 42) return distanceBlocks - 42;
    else return 42 - distanceBlocks; 
}

function distanceFromHqInFeet(distanceFeet) {
    return distanceFromHqInBlocks(distanceFeet) * 264;
}

function distanceTravelledInFeet(start, destination) {
    if (destination > start) return (destination - start) * 264;
    else return (start - destination) * 264;  
}

function calculatesFarePrice(start, destination) {
    let distanceTravelled = distanceTravelledInFeet(start, destination);
    if (distanceTravelled < 400) return 0;
    else if (distanceTravelled > 400 && distanceTravelled < 2000) return (distanceTravelled - 400) / 50;
    else if (distanceTravelled > 2000 && distanceTravelled < 2500) return 25;
    else if (distanceTravelled > 2500) return 'cannot travel that far';
}
