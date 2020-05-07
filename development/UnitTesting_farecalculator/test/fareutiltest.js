const mocha = require('mocha')
const chai = require('chai')
const fareutil = require('../fareutils')

const except = chai.expect
describe('fareutils', function () {
    it('except fare to be rs 50 for first 5 km', () => {
        let fare = fareutil.calcfare(0, 0)
        except(fare).to.equal(50)
    })

    it('except fare to be rs 100 for  10 km', () => {
        let fare = fareutil.calcfare(10, 0)
        except(fare).to.equal(100)
    })
})