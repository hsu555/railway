input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.No)
    for (let index = 0; index < 30; index++) {
        cuteBot.colorLight(cuteBot.RGBLights.RGB_L, 0xff0000)
        cuteBot.colorLight(cuteBot.RGBLights.RGB_R, 0x000000)
        basic.pause(200)
        cuteBot.colorLight(cuteBot.RGBLights.RGB_L, 0x000000)
        cuteBot.colorLight(cuteBot.RGBLights.RGB_R, 0xff0000)
        basic.pause(200)
    }
    cuteBot.setServo(cuteBot.ServoList.S1, 90)
    cuteBot.colorLight(cuteBot.RGBLights.ALL, 0xff0000)
})
input.onButtonPressed(Button.B, function () {
    cuteBot.setServo(cuteBot.ServoList.S1, 0)
    cuteBot.colorLight(cuteBot.RGBLights.ALL, 0x000000)
    basic.showLeds(`
        . . # . .
        . . . # .
        # # # # #
        . . . # .
        . . # . .
        `)
})
cuteBot.setServo(cuteBot.ServoList.S1, 0)
cuteBot.colorLight(cuteBot.RGBLights.ALL, 0x000000)
basic.showLeds(`
    . . # . .
    . . . # .
    # # # # #
    . . . # .
    . . # . .
    `)
basic.forever(function () {
	
})
