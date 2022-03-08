import shuffleArray from "shuffle-array"
import Ball from "./Ball"

class Cage {
    balls: Ball[]

    constructor() {
        this.balls = []

        for (let i = 0; i < 75; i += 1) {
            this.balls.push(new Ball(i))
        }
    }

    shuffle() {
        shuffleArray(this.balls)
    }
}

export default Cage
