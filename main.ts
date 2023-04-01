input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 30; index++) {
        pins.digitalWritePin(DigitalPin.P1, 1)
        pins.digitalWritePin(DigitalPin.P2, 0)
        basic.pause(200)
        pins.digitalWritePin(DigitalPin.P1, 0)
        pins.digitalWritePin(DigitalPin.P2, 1)
        basic.pause(200)
    }
    servos.P0.setAngle(0)
})
input.onButtonPressed(Button.B, function () {
    servos.P0.setAngle(90)
    pins.digitalWritePin(DigitalPin.P1, 0)
    pins.digitalWritePin(DigitalPin.P2, 0)
})
servos.P0.setAngle(90)
basic.forever(function () {
	
})
