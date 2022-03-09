/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-console */

const { Bingo } = require("./dist")

const b = new Bingo()

console.log(b)

for (let i = 0; i < 30; i += 1) {
    console.log(b.pickBall())
}
