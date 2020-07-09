input.onButtonPressed(Button.A, function () {
    if (X > 0) {
        led.unplot(X, Y)
        X += -1
    } else if (X < 0 && Y == 0) {
        Y = 4
        Y = 4
    } else {
        led.unplot(X, Y)
        X = 4
        Y += -1
    }
})
input.onButtonPressed(Button.B, function () {
    if (X < 4) {
        led.unplot(X, Y)
        X += 1
    } else if (X < 4 && Y == 4) {
        X = 0
        Y = 0
    } else {
        led.unplot(X, Y)
        X = 0
        Y += 1
    }
})
let Y = 0
let X = 0
X = 0
led.plot(X, 0)
Y = 0
basic.forever(function () {
    led.plot(X, Y)
})
