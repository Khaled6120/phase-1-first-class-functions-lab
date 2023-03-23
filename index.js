// Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

function returnFirstTwoDrivers() {
    return [drivers[0], drivers[1]]
}

function returnLastTwoDrivers() {
    let last = drivers.length - 1
    return [drivers[last - 1], drivers[last]]
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(int) {
    return function (number) {
        return int * number
    }
}

function fareDoubler(number) {
    return number * 2
}

function fareTripler(number) {
    return number * 3
}

function selectDifferentDrivers(drivers, func) {
    return func(drivers)
}


