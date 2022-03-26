input.onButtonPressed(Button.A, function () {
    soundExpression.soaring.playUntilDone()
    basic.showLeds(`
        # # # # #
        . . . . .
        . # . # .
        # . . . #
        . # # # .
        `)
})
input.onGesture(Gesture.LogoUp, function () {
    if (input.soundLevel() < 5) {
        music.startMelody(music.builtInMelody(Melodies.Wawawawaa), MelodyOptions.Once)
        basic.showLeds(`
            # # . # #
            # # . # #
            . . . . .
            . # # # .
            # . . . #
            `)
    }
})
input.onButtonPressed(Button.AB, function () {
    music.playMelody("C5 G C5 G C5 G C5 G ", 120)
    basic.showLeds(`
        # . . # .
        . # . . #
        . . . . .
        # . . . #
        . # # # .
        `)
})
input.onButtonPressed(Button.B, function () {
    soundExpression.twinkle.playUntilDone()
    basic.showLeds(`
        # . # . #
        . # # # .
        # # # # #
        . # # # .
        # . # . #
        `)
})
input.onGesture(Gesture.LogoDown, function () {
    if (input.soundLevel() > 5) {
        soundExpression.happy.playUntilDone()
        basic.showLeds(`
            . # . # .
            . . . . .
            # . . . #
            . # # # .
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            # . . . #
            . # # # .
            `)
    }
})
