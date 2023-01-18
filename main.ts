function MudaVerde () {
    estado = 2
    pins.digitalWritePin(DigitalPin.P0, 0)
    pins.digitalWritePin(DigitalPin.P1, 0)
    pins.digitalWritePin(DigitalPin.P2, 1)
}
function mudaVermelho () {
    estado = 0
    pins.digitalWritePin(DigitalPin.P0, 1)
    pins.digitalWritePin(DigitalPin.P1, 0)
    pins.digitalWritePin(DigitalPin.P2, 0)
}
input.onButtonPressed(Button.A, function () {
    mudaVermelho()
})
input.onSound(DetectedSound.Loud, function () {
    if (estado == 2) {
        mudaAmarelo()
        basic.pause(500)
        mudaVermelho()
    }
})
input.onButtonPressed(Button.AB, function () {
    MudaVerde()
})
input.onButtonPressed(Button.B, function () {
    mudaAmarelo()
})
function mudaAmarelo () {
    estado = 1
    pins.digitalWritePin(DigitalPin.P0, 0)
    pins.digitalWritePin(DigitalPin.P1, 1)
    pins.digitalWritePin(DigitalPin.P2, 0)
}
let estado = 0
estado = 0
input.setSoundThreshold(SoundThreshold.Loud, 128)
