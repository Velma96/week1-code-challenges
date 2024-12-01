function checkSpeed(speed){
    const speedLimit = 70;
    const kmPerPoint = 5;
    if (speed <= speedLimit) {
        return "Ok";
    }
    //loop the function 
    let points = 0;
    for (let currentSpeed = speedLimit + 1; currentSpeed <= speed; currentSpeed += kmPerPoint) 
        points++;

    if (points > 12) {
        return "License suspended";
    } else {
        return `Points: ${points}`;
    }
}
console.log(checkSpeed(85));