let state = 0
input.onButtonPressed(Button.A, function () {
    let GREENLIGHT = 0
    state = GREENLIGHT
    basic.showIcon(IconNames.Yes)
})
input.onButtonPressed(Button.B, function () {
    let REDLIGHT = 0
    state = REDLIGHT
    basic.showIcon(IconNames.No)
})
