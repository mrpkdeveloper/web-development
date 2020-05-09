const mocha = require('mocha')
const expect = require('chai').expect
const app = require('../server')
const request = require('request')
let server

describe('server', () => {

    before((done) => {
        //start the server
        server = app.listen(1111, done)
    })


    //check for the test
    it('rates should be correct', (done) => {
        //this is an asynch function 
        // and this test will not wait for this line to run thats why we add done function
        request.get("http://localhost:1111/rate", (err, resp, body) => {
            let rates = JSON.parse(body)
            expect(rates.fixed).to.equal(50)
            expect(rates.minkm).to.equal(5)
            expect(rates.perkm).to.equal(10)
            expect(rates.permin).to.equal(2)
            expect(rates.freemin).to.equal(15)
            done()
        })


    })
    //stop the server
    after(() => {
        server.close()
    })
})