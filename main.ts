input.onButtonPressed(Button.A, function () {
    if (led_x > 0) {
        led.unplot(led_x, 0)
        led_x += -1
        led.plot(led_x, 0)
    } else {
        led.unplot(led_x, led_y)
        led_x = 4
        led_y += -1
    }
})
input.onButtonPressed(Button.B, function () {
    if (led_x < 4) {
        led.unplot(led_x, led_y)
        led_x += 1
    } else {
        led.unplot(led_x, led_y)
        led_x = 0
        led_y += 1
    }
})
let led_y = 0
let led_x = 0
led_x = 0
led.plot(led_x, 0)
led_y = 0
basic.forever(function () {
    led.plot(led_x, led_y)
})
