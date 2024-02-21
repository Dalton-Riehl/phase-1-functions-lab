const homeStreet = 42;
const distanceFromHqInBlocks = (passengerLocation) => {
    let numberOfBlocks = 0;
    if (passengerLocation > homeStreet) {
        numberOfBlocks = passengerLocation - homeStreet;
    }
    else if (homeStreet > passengerLocation) {
        numberOfBlocks = homeStreet - passengerLocation;
    }
    return numberOfBlocks;
}

const distanceFromHqInFeet = (passengerLocation) => {
    let distance = distanceFromHqInBlocks(passengerLocation);
    let distanceInFeet = distance * 264;
    return distanceInFeet;
}

const distanceTravelledInFeet = (startBlock, endBlock) => {
let blocks = Math.abs(startBlock - endBlock);
let blocksInFeet = blocks * 264;
return blocksInFeet;
}

const calculatesFarePrice = (startBlock, endBlock) => {
    let fare = 0.00;
    let distance = distanceTravelledInFeet(startBlock, endBlock);
    if (distance <= 400) {
        return fare;
    }
    else if (distance > 400 && distance <= 2000) {
        fare = 0.02 * (distance - 400);
        return fare;
    }
    else if (distance > 2000 && distance <= 2500) {
        fare = 25;
        return fare;
    }
    else if (distance > 2500) {
        return 'cannot travel that far';
    }
}