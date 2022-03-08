// eslint-disable-next-line no-unused-vars
import Cage from "./helpers/Cage"
import Ball from "./helpers/Ball"

class Bingo {
    constructor() {
        this.cage = new Cage()
        this.cage.shuffle()
    }

    cage: Cage

    getBalls(): Ball[] {
        return this.cage.balls
    }

    pickBall(): Ball {
        return this.cage.balls.pop() as Ball
    }
}

export { Bingo, Cage, Ball }
