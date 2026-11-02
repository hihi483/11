input.onButtonPressed(Button.A, function () {
    if (hi == 0) {
        basic.showLeds(`
            # . # . .
            # . . # #
            # . . # #
            # . . . .
            # . # . .
            `)
        hi += 1
    } else if (hi == 1) {
        basic.showLeds(`
            # # # . .
            . # . # #
            # # . # #
            # . . . .
            # # # . .
            `)
        hi += 1
    } else if (hi == 2) {
        basic.showLeds(`
            # # # . .
            . # . # #
            # # . # #
            . # . . .
            # # # . .
            `)
        hi += 1
    } else if (hi == 3) {
        basic.showLeds(`
            # # # # .
            # # . # #
            # # . # #
            . # . . .
            . # # . .
            `)
        hi += 1
    } else if (hi == 4) {
        basic.showLeds(`
            # # # # .
            # . . # #
            # # . # #
            . # . . .
            # # # . .
            `)
        hi += 1
    } else if (hi == 5) {
        basic.showLeds(`
            . . # . .
            . # . . .
            # # # # #
            . # . . .
            . . # . .
            `)
        basic.pause(1000)
        basic.showIcon(IconNames.SmallHeart)
        hi = 0
    } else {
    	
    }
})
input.onButtonPressed(Button.B, function () {
    if (hihi == 0) {
        basic.showLeds(`
            . . # . #
            # # . . #
            # # . . #
            . . . . #
            . . # . #
            `)
        hihi += 1
    } else if (hihi == 1) {
        basic.showLeds(`
            . . # # #
            # # . . #
            # # . # #
            . . . # .
            . . # # #
            `)
        hihi += 1
    } else if (hihi == 2) {
        basic.showLeds(`
            . . # # #
            # # . . #
            # # . # #
            . . . . #
            . . # # #
            `)
        hihi += 1
    } else if (hihi == 3) {
        basic.showLeds(`
            . . # # #
            # # . # #
            # # . # #
            . . . . #
            . . # . #
            `)
        hihi += 1
    } else if (hihi == 4) {
        basic.showLeds(`
            # # # . .
            # . . # #
            # # . # #
            . # . . .
            # # # . .
            `)
        hihi += 1
    } else if (hihi == 5) {
        basic.showLeds(`
            . . # . .
            . . . # .
            # # # # #
            . . . # .
            . . # . .
            `)
        basic.pause(1000)
        basic.showIcon(IconNames.SmallHeart)
    } else {
        if (hi == 1 && hihi == 0) {
            basic.showLeds(`
                # . # . #
                # . . . #
                # . . . #
                # . . . #
                # . # . #
                `)
        } else if (hi == 0 && hihi == 0) {
        	
        } else if (false) {
        	
        } else if (false) {
        	
        } else {
        	
        }
    }
})
let hihi = 0
let hi = 0
basic.showLeds(`
    . . # . .
    # # . # #
    # # . # #
    . . . . .
    . . # . .
    `)
