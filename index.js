const returnFirstTwoDrivers =  function(drivers) {
// return [drivers[0], drivers[1]]
return drivers.slice(0, 2)
}

const returnLastTwoDrivers = function (drivers) {
  // return [drivers[2], drivers[3]] wokrs
  // return drivers.slice(2)  works
  return drivers.slice(-2)
  // A negative index can be used, indicating an offset from the end
  // of the sequence. slice(-2) extracts the last two elements in the sequence.
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]
  //  (returnFirstTwoDrivers() and returnLastTwoDrivers()).

const createFareMultiplier = function (multiplier) {
  return function (fare) {
    return multiplier * fare
  }
}

const fareDoubler = function (fare) {
  return fare * 2
}

const fareTripler = function(fare) {
  return fare * 3
}

const fetchSpecifiedDrivers = function (drivers, func) {
return func(drivers)  
}
