let Categoria = 0
let Grupo = 0
let i = 0
input.onButtonPressed(Button.A, function () {
    Categoria = randint(1, 3)
    basic.showNumber(Categoria)
    basic.showString("La categoria es: ")
    if (Categoria == 1) {
        basic.showString("Matematicas")
        basic.pause(100)
        basic.clearScreen()
    } else if (Categoria == 2) {
        basic.showString("Espanol")
        basic.pause(100)
        basic.clearScreen()
    } else if (Categoria == 3) {
        basic.showString("Ingles")
        basic.pause(100)
        basic.clearScreen()
    } else {
        basic.clearScreen()
    }
})
input.onGesture(Gesture.Shake, function () {
    Grupo = randint(1, 5)
    basic.showString("Grupo: ")
    basic.showNumber(Grupo)
    basic.pause(5000)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    i = 20
    while (i >= 0) {
        basic.pause(100)
        basic.showNumber(i)
        i += -1
    }
    music.startMelody(music.builtInMelody(Melodies.JumpDown), MelodyOptions.Once)
})
