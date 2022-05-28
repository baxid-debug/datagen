class MathOfBax {
    // Get random number between 2 values inclusive
    static random(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min)
    }

    // get random float, decimal = number of decimal places you want
    static randomFloat(min, max, decimal){
        return (Math.random() * (max - min) + min).toFixed(decimal);
    }
}

module.exports = MathOfBax