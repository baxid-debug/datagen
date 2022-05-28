class MathOfBax {
    // Get random number between 2 values inclusive
    static random(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min)
    }
}

module.exports = MathOfBax