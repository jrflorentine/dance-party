input.onGesture(Gesture.LogoUp, function () {
    basic.showIcon(IconNames.EigthNote)
})
input.onGesture(Gesture.LogoDown, function () {
    basic.showIcon(IconNames.Fabulous)
})
basic.forever(function () {
    led.plotBarGraph(
    input.soundLevel(),
    0
    )
})
