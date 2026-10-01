// CARINHO
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    if (vivo) {
        timer = 0
        felicidade += 2
        if (felicidade > 9) {
            felicidade = 9
            basic.showIcon(IconNames.Heart)
            music.play(music.builtinPlayableSoundEffect(soundExpression.happy), music.PlaybackMode.UntilDone)
            basic.showLeds(`
                . # . # .
                . # . # .
                # . . . #
                # . . . #
                . # # # .
                `)
            basic.showLeds(`
                . . . . .
                . # . # .
                . . . . .
                # . . . #
                . # # # .
                `)
        }
    }
})
// BOTÃO A = COOKIE
input.onButtonPressed(Button.A, function () {
    if (vivo) {
        timer = 0
        felicidade += 3
        if (felicidade > 9) {
            felicidade = 9
        }
        // cookie
        basic.showLeds(`
            . # # # .
            # # # # #
            # # # # #
            # # # # #
            . # # # .
            `)
        music.playTone(523, music.beat(BeatFraction.Half))
        // cookie
        basic.showLeds(`
            . . . . .
            # # . . .
            # # # # .
            # # # # #
            . # # # .
            `)
        music.playTone(659, music.beat(BeatFraction.Half))
        // mastigando
        basic.showLeds(`
            . . . . .
            . . . . .
            # . . . .
            # # # . .
            . # # # .
            `)
        music.playTone(698, music.beat(BeatFraction.Half))
        // mastigando
        basic.showLeds(`
            . . . . .
            . # . # .
            . # . # .
            # . . . #
            . # # # .
            `)
    }
})
// BRINCAR
input.onGesture(Gesture.Shake, function () {
    if (vivo) {
        timer = 0
        felicidade += 2
        if (felicidade > 9) {
            felicidade = 9
            basic.showLeds(`
                # . . . #
                . . . . .
                . # # # .
                # . . . #
                . # # # .
                `)
        }
        music._playDefaultBackground(music.builtInPlayableMelody(Melodies.JumpUp), music.PlaybackMode.UntilDone)
    }
})
// VER FELICIDADE
input.onButtonPressed(Button.AB, function () {
    basic.showNumber(felicidade)
    basic.pause(3000)
})
input.onSound(DetectedSound.Loud, function () {
    if (!(vivo)) {
        vivo = true
        felicidade = 9
        timer = 0
        basic.showIcon(IconNames.Meh)
        music.play(music.builtinPlayableSoundEffect(soundExpression.happy), music.PlaybackMode.UntilDone)
    }
})
let timer = 0
let vivo = false
let felicidade = 0
felicidade = 9
vivo = true
felicidade = 9
timer = 0
music.play(music.builtinPlayableSoundEffect(soundExpression.hello), music.PlaybackMode.UntilDone)
// LOOP PRINCIPAL
basic.forever(function () {
    basic.pause(8000)
    if (vivo) {
        felicidade += -1
        if (felicidade < 0) {
            felicidade = 0
        }
        timer += 1
        // HUMOR
        if (felicidade <= 2) {
            basic.showIcon(IconNames.Sad)
            music.play(music.builtinPlayableSoundEffect(soundExpression.sad), music.PlaybackMode.UntilDone)
        } else if (felicidade <= 5) {
            basic.showLeds(`
                . . . . .
                . # . # .
                . . . . .
                . # # # .
                . . . . .
                `)
            music.play(music.builtinPlayableSoundEffect(soundExpression.sad), music.PlaybackMode.UntilDone)
        } else if (felicidade <= 7) {
            basic.showIcon(IconNames.Happy)
        } else {
            basic.showIcon(IconNames.Happy)
        }
        // RECLAMA
        if (timer == 20) {
            music.play(music.builtinPlayableSoundEffect(soundExpression.sad), music.PlaybackMode.UntilDone)
        }
        // SONO
        if (timer == 30) {
            basic.showIcon(IconNames.Asleep)
            music.play(music.builtinPlayableSoundEffect(soundExpression.yawn), music.PlaybackMode.UntilDone)
        }
        // MORTE
        if (timer >= 40 || felicidade <= 0) {
            vivo = false
            basic.showIcon(IconNames.Skull)
            music.play(music.builtinPlayableSoundEffect(soundExpression.sad), music.PlaybackMode.UntilDone)
        }
    } else {
        basic.showIcon(IconNames.Skull)
    }
})
