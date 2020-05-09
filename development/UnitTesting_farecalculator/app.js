//we did this in order to add a test file for server.js
const app = require('./server')
app.listen(1111, () => { console.log("server open at http://localhost:1111") })