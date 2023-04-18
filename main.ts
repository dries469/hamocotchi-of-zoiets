input.onButtonPressed(Button.A, function () {
    knuffel += 5
})
input.onButtonPressed(Button.B, function () {
    voeding += 5
})
let dood = 0
let voeding = 20
let knuffel = 20
basic.forever(function () {
    basic.pause(1000)
    knuffel += -1
    voeding += -1
})
basic.forever(function () {
    if (voeding && knuffel) {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            # . . . #
            . # # # .
            `)
    }
})
