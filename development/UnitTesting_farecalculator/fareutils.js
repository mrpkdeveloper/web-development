// object rate created 
rate = {
    fixed: 50,
    minkm: 5,
    perkm: 10,
    freemin: 15,
    permin: 2

}

function calcfare(km, min) {
    let fare = rate.fixed
    fare += (km > rate.minkm) ? ((km - rate.minkm) * rate.perkm) : 0
    fare += (min > rate.freemin) ? ((min - rate.freemin) * rate.permin) : 0
    return fare

}

exports = module.exports = {
    rate, calcfare
}