function checkSpeedLimit(speed, area) {

    speed = Number(speed);

    const speedLimits = {
        motorway: 130,
        interstate: 90,
        city: 50,
        residential: 20
    };

    const speedLimit = speedLimits[area];

    const difference = speed - speedLimit;

    let status;
    if (difference <= 0) {
        console.log(`Driving ${speed} km/h in a ${speedLimit} zone`);
        return;
    } else if (difference <= 20) {
        status = 'speeding';
    } else if (difference <= 40) {
        status = 'excessive speeding';
    } else {
        status = 'reckless driving';
    }

    console.log(`The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - ${status}`);
}

checkSpeedLimit(40, 'city');
checkSpeedLimit(21, 'residential');
checkSpeedLimit(120, 'interstate');
checkSpeedLimit(200, 'motorway');