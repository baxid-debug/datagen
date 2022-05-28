// import requried node module
const express = require('express')

// import required custom modules
const MathOfBax = require('./modules/mathOfBax')

// express settings
const port = 3000
const app = express()

app.get('/:loop', (req, res) => {
    var response = []

    var sample_data = "var sampleData = ["
    for (let i = 0; i < req.params.loop; i++) {
        var randomYear = MathOfBax.random(1900,2022)
        var randomMonth = MathOfBax.random(0, 11)
        var randomDay = MathOfBax.random(0, 29)
        var randomHour = MathOfBax.random(0,23)
        var randomMin = MathOfBax.random(0,59)
        var randomSec = MathOfBax.random(0,59)
        var randomFloat = MathOfBax.random(0,59)
        sample_data += "{x: new Date(" + randomYear + ", " + randomMonth + ", " + randomDay + ", " + randomHour + ", " + randomMin + ", " + randomSec + "), y: " + randomFloat + "},"
    }
    sample_data += "]"
    response.push(sample_data)

    res.send(sample_data)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

