basic.showIcon(IconNames.Heart)
basic.forever(function () {
    if (ModuleWorld_Digital.Ultrasonic(ModuleWorld_Digital.mwDigitalNum.P0P1) <= 30 && ModuleWorld_Digital.Ultrasonic(ModuleWorld_Digital.mwDigitalNum.P0P1) > 25) {
        music.playTone(392, music.beat(BeatFraction.Whole))
    } else if (ModuleWorld_Digital.Ultrasonic(ModuleWorld_Digital.mwDigitalNum.P0P1) <= 20 && ModuleWorld_Digital.Ultrasonic(ModuleWorld_Digital.mwDigitalNum.P0P1) > 15) {
        music.playTone(330, music.beat(BeatFraction.Whole))
    } else if (ModuleWorld_Digital.Ultrasonic(ModuleWorld_Digital.mwDigitalNum.P0P1) <= 25 && ModuleWorld_Digital.Ultrasonic(ModuleWorld_Digital.mwDigitalNum.P0P1) > 20) {
        music.playTone(349, music.beat(BeatFraction.Whole))
    } else if (ModuleWorld_Digital.Ultrasonic(ModuleWorld_Digital.mwDigitalNum.P0P1) <= 15 && ModuleWorld_Digital.Ultrasonic(ModuleWorld_Digital.mwDigitalNum.P0P1) > 10) {
        music.playTone(294, music.beat(BeatFraction.Whole))
    } else if (ModuleWorld_Digital.Ultrasonic(ModuleWorld_Digital.mwDigitalNum.P0P1) <= 10 && ModuleWorld_Digital.Ultrasonic(ModuleWorld_Digital.mwDigitalNum.P0P1) > 5) {
        music.playTone(262, music.beat(BeatFraction.Whole))
    }
})
