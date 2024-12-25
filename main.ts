//% color="#AA278D" weight=100
namespace JuCraft {
    let steve = sprites.create(Player_013, SpriteKind.Player)

    //% block
    export function showSteve() {
    }

    //% block
    export function walkSteveDown() {
        animation.runImageAnimation(steve, [Player_013, Player_014, Player_014, Player_015, Player_016, Player_017], 100, true)
    }
}
