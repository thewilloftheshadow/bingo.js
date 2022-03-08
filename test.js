/* eslint-disable no-console */

import Bingo from "./dist"

const b = new Bingo()

console.log(b)

for (let i = 0; i < 30; i += 1) {
    console.log(b.pickBall())
}
