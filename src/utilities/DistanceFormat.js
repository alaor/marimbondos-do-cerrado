const DistanceFormat = (distanceInMeters) => {
    let distanceToKilometers = distanceInMeters / 1000;
    return distanceToKilometers.toFixed(2);
};

export {
    DistanceFormat,
}