namespace SpriteKind {
    export const coin = SpriteKind.create()
    export const fash = SpriteKind.create()
    export const shadow = SpriteKind.create()
    export const ghost = SpriteKind.create()
    export const sucker = SpriteKind.create()
}
namespace myTiles {
    //% blockIdentity=images._tile
    export const tile0 = img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`
}
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setImage(img`
. . . . . 7 7 7 7 7 . . . . . . . . 
. . . . 7 7 7 7 7 7 7 7 7 . . . . . 
. . . . e e e d d f d . . . . . . . 
. . . e d e d d d f d d d . . . . . 
. . . e d e e d d d f d d d . . . . 
. . . e e d d d d f f f f . . . . . 
. . . . . d d d d d d d . . . . . . 
. . 2 2 7 7 8 7 7 7 . . . . . . . . 
. 2 2 7 7 7 8 7 7 8 7 7 7 . . . . . 
. 2 7 7 7 7 8 7 7 8 7 7 7 7 . . . b 
. 2 1 1 7 8 5 8 8 5 8 7 1 1 . . b b 
f 2 1 1 1 8 8 8 8 8 8 b b b b b b b 
f 2 1 1 8 8 8 8 8 8 8 8 . . . . b b 
f 2 2 2 8 8 8 8 8 8 8 8 . . . . . b 
. . . e e e . . . . e e e . . . . . 
. . e e e e . . . . e e e e . . . . 
`)
    mySprite.image.flipX()
    x = true
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.doorOpenSouth, function (sprite, location) {
    tiles.placeOnTile(mySprite, tiles.getTileLocation(4, 20))
    for (let value of tiles.getTilesByType(sprites.dungeon.floorLight5)) {
        ghost = sprites.create(img`
. . . . . . . 7 7 7 . . . . . . . 
. . . . . . 7 7 7 7 7 . . . . . . 
. . . . . 7 7 6 7 6 7 7 . . . . . 
. . . . . 7 7 6 7 6 7 7 . . . . . 
. . . . . 7 7 7 7 7 7 7 . . . . . 
. . . . . . 7 6 6 6 7 . . . . . . 
. . . 7 7 7 7 7 7 7 7 7 7 . . . . 
. 7 7 7 7 7 7 7 7 7 7 7 7 7 . . . 
7 7 . 7 7 7 7 7 7 7 7 7 7 7 7 7 . 
7 7 . 7 7 7 7 7 7 7 7 . . . . 7 . 
. . . 7 7 7 7 7 7 7 7 7 . . 7 7 . 
. . . . . . 7 7 7 7 7 7 7 7 . . . 
. . . . . . 7 7 7 7 7 7 7 7 7 . . 
. . . . . . . . 7 7 7 7 7 7 7 . . 
. . . . . . . . . . 7 7 7 7 7 . . 
. . . . . . . . . . . 7 7 7 7 . . 
. . . . . . . . . . . . . 7 7 . . 
`, SpriteKind.ghost)
        tiles.placeOnTile(ghost, value)
        ghost.follow(mySprite, 50)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.fash, function (sprite, otherSprite) {
    if (x) {
        otherSprite.setImage(img`
. . . . . . . . . . . . . . . . 
. . . . . . . 1 1 1 1 . . . . . 
. . . . . . 1 1 1 1 1 . . . . . 
. . . . 1 1 1 1 1 1 1 . . . . . 
. . 1 1 1 1 1 1 1 1 1 . . . . . 
. 1 1 1 1 1 1 1 1 1 1 . . . . . 
1 1 1 1 1 1 1 1 1 1 1 . . . . . 
1 1 1 1 1 1 1 1 1 1 1 . . . . . 
1 1 1 1 1 1 1 1 1 1 1 . . . . . 
1 1 1 1 1 1 1 1 1 1 1 . . . . . 
1 1 1 1 1 1 1 1 1 1 1 . . . . . 
1 1 1 1 1 1 1 1 1 1 1 . . . . . 
. 1 1 1 1 1 1 1 1 1 1 . . . . . 
. . 1 1 1 1 1 1 1 1 1 . . . . . 
. . . . 1 1 1 1 1 1 1 . . . . . 
. . . . . . 1 1 1 1 1 . . . . . 
`)
        otherSprite.image.flipX()
        otherSprite.x += -1
    } else {
        otherSprite.setImage(img`
. . . . . . . . . . . . . . . . 
. . . . . . . 1 1 1 1 . . . . . 
. . . . . . 1 1 1 1 1 . . . . . 
. . . . 1 1 1 1 1 1 1 . . . . . 
. . 1 1 1 1 1 1 1 1 1 . . . . . 
. 1 1 1 1 1 1 1 1 1 1 . . . . . 
1 1 1 1 1 1 1 1 1 1 1 . . . . . 
1 1 1 1 1 1 1 1 1 1 1 . . . . . 
1 1 1 1 1 1 1 1 1 1 1 . . . . . 
1 1 1 1 1 1 1 1 1 1 1 . . . . . 
1 1 1 1 1 1 1 1 1 1 1 . . . . . 
1 1 1 1 1 1 1 1 1 1 1 . . . . . 
. 1 1 1 1 1 1 1 1 1 1 . . . . . 
. . 1 1 1 1 1 1 1 1 1 . . . . . 
. . . . 1 1 1 1 1 1 1 . . . . . 
. . . . . . 1 1 1 1 1 . . . . . 
`)
        otherSprite.x += 1
    }
    pause(1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.coin, function (sprite, otherSprite) {
    otherSprite.destroy()
    info.changeScoreBy(1)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setImage(img`
. . . . . 7 7 7 7 7 . . . . . . . . 
. . . . 7 7 7 7 7 7 7 7 7 . . . . . 
. . . . e e e d d f d . . . . . . . 
. . . e d e d d d f d d d . . . . . 
. . . e d e e d d d f d d d . . . . 
. . . e e d d d d f f f f . . . . . 
. . . . . d d d d d d d . . . . . . 
. . 2 2 7 7 8 7 7 7 . . . . . . . . 
. 2 2 7 7 7 8 7 7 8 7 7 7 . . . . . 
. 2 7 7 7 7 8 7 7 8 7 7 7 7 . . . b 
. 2 1 1 7 8 5 8 8 5 8 7 1 1 . . b b 
f 2 1 1 1 8 8 8 8 8 8 b b b b b b b 
f 2 1 1 8 8 8 8 8 8 8 8 . . . . b b 
f 2 2 2 8 8 8 8 8 8 8 8 . . . . . b 
. . . e e e . . . . e e e . . . . . 
. . e e e e . . . . e e e e . . . . 
`)
    x = false
})
sprites.onOverlap(SpriteKind.fash, SpriteKind.ghost, function (sprite, otherSprite) {
    ghost.follow(mySprite, 0)
    ghost.setVelocity(0, 0)
    ghost.setImage(img`
. . . . . . . 1 1 1 . . . . . . . 
. . . . . . 1 1 1 1 1 . . . . . . 
. . . . . 1 1 d 1 d 1 1 . . . . . 
. . . . . 1 1 d 1 d 1 1 . . . . . 
. . . . . 1 1 1 1 1 1 1 . . . . . 
. . . . . . 1 d d d 1 . . . . . . 
. . . 1 1 1 1 1 1 1 1 1 1 . . . . 
. 1 1 1 1 1 1 1 1 1 1 1 1 1 . . . 
1 1 . 1 1 1 1 1 1 1 1 1 1 1 1 1 . 
1 1 . 1 1 1 1 1 1 1 1 . . . . 1 . 
. . . 1 1 1 1 1 1 1 1 1 . . 1 1 . 
. . . . . . 1 1 1 1 1 1 1 1 . . . 
. . . . . . 1 1 1 1 1 1 1 1 1 . . 
. . . . . . . . 1 1 1 1 1 1 1 . . 
. . . . . . . . . . 1 1 1 1 1 . . 
. . . . . . . . . . . 1 1 1 1 . . 
. . . . . . . . . . . . . 1 1 . . 
`)
    sprites.setDataBoolean(ghost, "life", true)
    pause(500)
    sprites.setDataBoolean(ghost, "life", false)
    ghost.setImage(img`
. . . . . . . 7 7 7 . . . . . . . 
. . . . . . 7 7 7 7 7 . . . . . . 
. . . . . 7 7 6 7 6 7 7 . . . . . 
. . . . . 7 7 6 7 6 7 7 . . . . . 
. . . . . 7 7 7 7 7 7 7 . . . . . 
. . . . . . 7 6 6 6 7 . . . . . . 
. . . 7 7 7 7 7 7 7 7 7 7 . . . . 
. 7 7 7 7 7 7 7 7 7 7 7 7 7 . . . 
7 7 . 7 7 7 7 7 7 7 7 7 7 7 7 7 . 
7 7 . 7 7 7 7 7 7 7 7 . . . . 7 . 
. . . 7 7 7 7 7 7 7 7 7 . . 7 7 . 
. . . . . . 7 7 7 7 7 7 7 7 . . . 
. . . . . . 7 7 7 7 7 7 7 7 7 . . 
. . . . . . . . 7 7 7 7 7 7 7 . . 
. . . . . . . . . . 7 7 7 7 7 . . 
. . . . . . . . . . . 7 7 7 7 . . 
. . . . . . . . . . . . . 7 7 . . 
`)
    ghost.follow(mySprite, 50)
})
sprites.onOverlap(SpriteKind.sucker, SpriteKind.ghost, function (sprite, otherSprite) {
    if (sprites.readDataBoolean(otherSprite, "life")) {
        otherSprite.destroy()
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.sucker, function (sprite, otherSprite) {
    if (x) {
        otherSprite.setImage(img`
. . . . . . . . . . . . . . . . 
. . . . . . . d d d d . . . . . 
. . . . . . d d d d d . . . . . 
. . . . d d d d d d d . . . . . 
. . d d d d d d d d d . . . . . 
. d d d d d d d d d d . . . . . 
d d d d d d d d d d d . . . . . 
d d d d d d d d d d d . . . . . 
d d d d d d d d d d d . . . . . 
d d d d d d d d d d d . . . . . 
d d d d d d d d d d d . . . . . 
d d d d d d d d d d d . . . . . 
. d d d d d d d d d d . . . . . 
. . d d d d d d d d d . . . . . 
. . . . d d d d d d d . . . . . 
. . . . . . d d d d d . . . . . 
`)
        otherSprite.image.flipX()
        otherSprite.x += -1
    } else {
        otherSprite.setImage(img`
. . . . . . . . . . . . . . . . 
. . . . . . . d d d d . . . . . 
. . . . . . d d d d d . . . . . 
. . . . d d d d d d d . . . . . 
. . d d d d d d d d d . . . . . 
. d d d d d d d d d d . . . . . 
d d d d d d d d d d d . . . . . 
d d d d d d d d d d d . . . . . 
d d d d d d d d d d d . . . . . 
d d d d d d d d d d d . . . . . 
d d d d d d d d d d d . . . . . 
d d d d d d d d d d d . . . . . 
. d d d d d d d d d d . . . . . 
. . d d d d d d d d d . . . . . 
. . . . d d d d d d d . . . . . 
. . . . . . d d d d d . . . . . 
`)
        otherSprite.x += 1
    }
    pause(1)
})
let on_sucker = false
let on_flsh = false
let shadow: Sprite = null
let ghost: Sprite = null
let x = false
let mySprite2: Sprite = null
let mySprite: Sprite = null
mySprite = sprites.create(img`
. . . . . 7 7 7 7 7 . . . . . . . . 
. . . . 7 7 7 7 7 7 7 7 7 . . . . . 
. . . . e e e d d f d . . . . . . . 
. . . e d e d d d f d d d . . . . . 
. . . e d e e d d d f d d d . . . . 
. . . e e d d d d f f f f . . . . . 
. . . . . d d d d d d d . . . . . . 
. . 2 2 7 7 8 7 7 7 . . . . . . . . 
. 2 2 7 7 7 8 7 7 8 7 7 7 . . . . . 
. 2 7 7 7 7 8 7 7 8 7 7 7 7 . . . b 
. 2 1 1 7 8 5 8 8 5 8 7 1 1 . . b b 
f 2 1 1 1 8 8 8 8 8 8 b b b b b b b 
f 2 1 1 8 8 8 8 8 8 8 8 . . . . b b 
f 2 2 2 8 8 8 8 8 8 8 8 . . . . . b 
. . . e e e . . . . e e e . . . . . 
. . e e e e . . . . e e e e . . . . 
`, SpriteKind.Player)
let fash = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . 1 1 1 1 . . . . . 
. . . . . . 1 1 1 1 1 . . . . . 
. . . . 1 1 1 1 1 1 1 . . . . . 
. . 1 1 1 1 1 1 1 1 1 . . . . . 
. 1 1 1 1 1 1 1 1 1 1 . . . . . 
1 1 1 1 1 1 1 1 1 1 1 . . . . . 
1 1 1 1 1 1 1 1 1 1 1 . . . . . 
1 1 1 1 1 1 1 1 1 1 1 . . . . . 
1 1 1 1 1 1 1 1 1 1 1 . . . . . 
1 1 1 1 1 1 1 1 1 1 1 . . . . . 
1 1 1 1 1 1 1 1 1 1 1 . . . . . 
. 1 1 1 1 1 1 1 1 1 1 . . . . . 
. . 1 1 1 1 1 1 1 1 1 . . . . . 
. . . . 1 1 1 1 1 1 1 . . . . . 
. . . . . . 1 1 1 1 1 . . . . . 
`, SpriteKind.fash)
let sucker = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . d d d d . . . . . 
. . . . . . d d d d d . . . . . 
. . . . d d d d d d d . . . . . 
. . d d d d d d d d d . . . . . 
. d d d d d d d d d d . . . . . 
d d d d d d d d d d d . . . . . 
d d d d d d d d d d d . . . . . 
d d d d d d d d d d d . . . . . 
d d d d d d d d d d d . . . . . 
d d d d d d d d d d d . . . . . 
d d d d d d d d d d d . . . . . 
. d d d d d d d d d d . . . . . 
. . d d d d d d d d d . . . . . 
. . . . d d d d d d d . . . . . 
. . . . . . d d d d d . . . . . 
`, SpriteKind.sucker)
fash.setFlag(SpriteFlag.Invisible, true)
sucker.setFlag(SpriteFlag.Invisible, true)
controller.moveSprite(mySprite)
scene.cameraFollowSprite(mySprite)
tiles.setTilemap(tiles.createTilemap(
            hex`10001e0002010101010101010812121212121211030a0a0a0a0a0a0a070a0a0a0a0a0a10030a0a0a0a0a0a0a090a0a0a0a0a0a10040e0e0505050505060a0a0a0a0a0a100a0a0a0a0a0a0a0a070a0a0a0a0a0a100a0a0a0a0a0a0a0a070a0a0a0a0a0a100a0a0a0a0a0a0a0a070a0a0a0a0a0a100a0a0a0a0a0a0a0a070a0a0a0a0a0a100e05050505050505060e0e0e0e130e0f0a0a0a0a0a0c0a0a0a151919191919170a0a0a0a0a0c0a0a0a151919191919170a0a0a0a0a0c0a0a0a151919191919170a0a0a0a0a0c0a0a0a181919191419170a0a0a0a0a0c0a0a0a15191919191917131313131313131313160e0e0e0e0e0e0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001a0d0d0d0d0d0d0d0d0d0d1100000000180c1b0c1b0c1b0c1b0c1c1000000000181b0c1b0c1b0c1b0c1b0c1010000000180c1b0c1b0c1b0c1b0c1b1000000000181b0c1b0c1b0c1b0c1b0c1000000000180c1b0c1b0c1b0c1b0c1b1000000000181b0c1b0c1b0c1b0c1b0c1000000000160e0e0e0e0e0e0e0e0e0e0f0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`,
            img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 . . . . . . . 2 . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . 2 2 2 2 2 2 . . . . . . 2 
. . . . . . . . 2 . . . . . . 2 
. . . . . . . . 2 . . . . . . 2 
. . . . . . . . 2 . . . . . . 2 
. . . . . . . . 2 . . . . . . 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 . . 2 
. . . . . . . . . 2 . . . . . 2 
. . . . . . . . . 2 . . . . . 2 
. . . . . . . . . 2 . . . . . 2 
. . . . . . . . . . . . . . . 2 
. . . . . . . . . 2 . . . . . 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
. . 2 . . . . . . . . . . 2 . . 
. . 2 . . . . . . . . . . 2 . . 
. . 2 . . . . . . . . . . 2 . . 
. . 2 . . . . . . . . . . 2 . . 
. . 2 . . . . . . . . . . 2 . . 
. . 2 . . . . . . . . . . 2 . . 
. . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`,
            [myTiles.tile0,sprites.dungeon.purpleOuterNorth1,sprites.dungeon.purpleOuterNorthWest,sprites.dungeon.purpleOuterWest1,sprites.dungeon.purpleOuterSouthEast,sprites.dungeon.purpleOuterSouth1,sprites.dungeon.purpleOuterSouthWest,sprites.dungeon.purpleOuterEast0,sprites.dungeon.purpleOuterNorthEast,sprites.dungeon.stairLarge,sprites.dungeon.floorDark2,sprites.dungeon.floorDark4,sprites.dungeon.floorDarkDiamond,sprites.dungeon.greenOuterNorth0,sprites.dungeon.greenOuterSouth0,sprites.dungeon.greenOuterSouthWest,sprites.dungeon.greenOuterEast0,sprites.dungeon.greenOuterNorthEast,sprites.dungeon.greenOuterNorth1,sprites.dungeon.greenOuterSouth1,sprites.dungeon.doorOpenSouth,sprites.dungeon.greenOuterWest0,sprites.dungeon.greenOuterSouthEast,sprites.dungeon.greenOuterEast1,sprites.dungeon.greenOuterWest1,sprites.dungeon.floorLight2,sprites.dungeon.greenOuterNorthWest,sprites.dungeon.floorLight0,sprites.dungeon.floorLight5],
            TileScale.Sixteen
        ))
scene.setBackgroundColor(11)
tiles.placeOnTile(mySprite, tiles.getTileLocation(2, 6))
for (let value of tiles.getTilesByType(sprites.dungeon.floorDarkDiamond)) {
    mySprite2 = sprites.create(img`
. . b b b b . . 
. b 5 5 5 5 b . 
b 5 d 3 3 d 5 b 
b 5 3 5 5 1 5 b 
c 5 3 5 5 1 d c 
c d d 1 1 d d c 
. f d d d d f . 
. . f f f f . . 
`, SpriteKind.coin)
    tiles.placeOnTile(mySprite2, value)
}
forever(function () {
    if (fash) {
        if (controller.A.isPressed()) {
            shadow = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.shadow)
            shadow.setPosition(mySprite.x, mySprite.y)
            shadow.y += 3
            shadow.setVelocity(50, 0)
            pause(200)
            shadow.destroy()
        }
    }
})
forever(function () {
    if (controller.A.isPressed()) {
        on_flsh = true
        pause(200)
        on_flsh = false
        fash.setPosition(mySprite.x, mySprite.y)
        fash.y += 3
        fash.setFlag(SpriteFlag.Invisible, false)
        fash.setFlag(SpriteFlag.Ghost, false)
        controller.moveSprite(mySprite, 0, 0)
        pause(200)
        fash.setFlag(SpriteFlag.Invisible, true)
        fash.setFlag(SpriteFlag.Ghost, true)
        controller.moveSprite(mySprite, 100, 100)
    }
})
forever(function () {
    if (controller.B.isPressed()) {
        on_sucker = true
        pause(200)
        on_sucker = false
        sucker.setPosition(mySprite.x, mySprite.y)
        sucker.y += 3
        sucker.setFlag(SpriteFlag.Invisible, false)
        sucker.setFlag(SpriteFlag.Ghost, false)
        controller.moveSprite(mySprite, 0, 0)
        pause(200)
        sucker.setFlag(SpriteFlag.Invisible, true)
        sucker.setFlag(SpriteFlag.Ghost, true)
        controller.moveSprite(mySprite, 100, 100)
    }
})
