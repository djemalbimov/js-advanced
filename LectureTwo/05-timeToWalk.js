function calculateWalkingTime(steps, footprintLength, speed) {

    const totalDistance = steps * footprintLength;

    const walkingTimeHours = totalDistance / (speed * 1000);

    const restTimeMinutes = Math.floor(totalDistance / 500);

    const totalTimeMinutes = Math.floor(walkingTimeHours * 60) + restTimeMinutes;
    const totalTimeSeconds = Math.ceil((walkingTimeHours * 3600) % 60);

    const hours = Math.floor(totalTimeMinutes / 60);
    const minutes = totalTimeMinutes % 60;

    console.log(`${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(totalTimeSeconds).padStart(2, '0')}`);
}

calculateWalkingTime(4000, 0.60, 5);
calculateWalkingTime(2564, 0.70, 5.5);