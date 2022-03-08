class Ball {
    /**
     * The column of the bingo card that this ball is located in.
     */
    column = ""

    /**
     * The number of the ball
     */
    value: number

    /**
     * The full label for this ball
     */
    label = ""

    constructor(value: number) {
        this.value = value
        if (value <= 15) this.column = "B"
        else if (value <= 30) this.column = "I"
        else if (value <= 45) this.column = "N"
        else if (value <= 60) this.column = "G"
        else if (value <= 75) this.column = "O"

        this.label = `${this.column}${this.value}`
    }
}

export default Ball
