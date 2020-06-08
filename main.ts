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
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . 7 7 7 7 7 . . . . . . . . 
. . . . . . . . . . . . . . . . 7 7 7 7 7 7 7 7 7 . . . . . 
. . . . . . . . . . . . . . . . e e e d d f d . . . . . . . 
. . . . . . . . . . . . . . . e d e d d d f d d d . . . . . 
. . . . . . . . . . . . . . . e d e e d d d f d d d . . . . 
. . . . . . . . . . . . . . . e e d d d d f f f f . . . . . 
. . . . . . . . . . . . . . . . . d d d d d d d . . . . . . 
. . . . . . . . . . . . . . 2 2 7 7 8 7 7 7 . . . . . . . . 
. . . . . . . . . . . . . 2 2 7 7 7 8 7 7 8 7 7 7 . . . . . 
. . . . . . . . . . . . . 2 7 7 7 7 8 7 7 8 7 7 7 7 . . . b 
. . . . . . . . . . . . . 2 1 1 7 8 5 8 8 5 8 7 1 1 . . b b 
. . . . . . . . . . . . f 2 1 1 1 8 8 8 8 8 8 b b b b b b b 
. . . . . . . . . . . . f 2 1 1 8 8 8 8 8 8 8 8 . . . . b b 
. . . . . . . . . . . . f 2 2 2 8 8 8 8 8 8 8 8 . . . . . b 
. . . . . . . . . . . . . . . e e e . . . . e e e . . . . . 
. . . . . . . . . . . . . . e e e e . . . . e e e e . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
`)
    mySprite.image.flipX()
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setImage(img`
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . 7 7 7 7 7 . . . . . . . . 
. . . . . . . . . . . . . . . . 7 7 7 7 7 7 7 7 7 . . . . . 
. . . . . . . . . . . . . . . . e e e d d f d . . . . . . . 
. . . . . . . . . . . . . . . e d e d d d f d d d . . . . . 
. . . . . . . . . . . . . . . e d e e d d d f d d d . . . . 
. . . . . . . . . . . . . . . e e d d d d f f f f . . . . . 
. . . . . . . . . . . . . . . . . d d d d d d d . . . . . . 
. . . . . . . . . . . . . . 2 2 7 7 8 7 7 7 . . . . . . . . 
. . . . . . . . . . . . . 2 2 7 7 7 8 7 7 8 7 7 7 . . . . . 
. . . . . . . . . . . . . 2 7 7 7 7 8 7 7 8 7 7 7 7 . . . b 
. . . . . . . . . . . . . 2 1 1 7 8 5 8 8 5 8 7 1 1 . . b b 
. . . . . . . . . . . . f 2 1 1 1 8 8 8 8 8 8 b b b b b b b 
. . . . . . . . . . . . f 2 1 1 8 8 8 8 8 8 8 8 . . . . b b 
. . . . . . . . . . . . f 2 2 2 8 8 8 8 8 8 8 8 . . . . . b 
. . . . . . . . . . . . . . . e e e . . . . e e e . . . . . 
. . . . . . . . . . . . . . e e e e . . . . e e e e . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
`)
})
let mySprite: Sprite = null
mySprite = sprites.create(img`
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . 7 7 7 7 7 . . . . . . . . 
. . . . . . . . . . . . . . . . 7 7 7 7 7 7 7 7 7 . . . . . 
. . . . . . . . . . . . . . . . e e e d d f d . . . . . . . 
. . . . . . . . . . . . . . . e d e d d d f d d d . . . . . 
. . . . . . . . . . . . . . . e d e e d d d f d d d . . . . 
. . . . . . . . . . . . . . . e e d d d d f f f f . . . . . 
. . . . . . . . . . . . . . . . . d d d d d d d . . . . . . 
. . . . . . . . . . . . . . 2 2 7 7 8 7 7 7 . . . . . . . . 
. . . . . . . . . . . . . 2 2 7 7 7 8 7 7 8 7 7 7 . . . . . 
. . . . . . . . . . . . . 2 7 7 7 7 8 7 7 8 7 7 7 7 . . . b 
. . . . . . . . . . . . . 2 1 1 7 8 5 8 8 5 8 7 1 1 . . b b 
. . . . . . . . . . . . f 2 1 1 1 8 8 8 8 8 8 b b b b b b b 
. . . . . . . . . . . . f 2 1 1 8 8 8 8 8 8 8 8 . . . . b b 
. . . . . . . . . . . . f 2 2 2 8 8 8 8 8 8 8 8 . . . . . b 
. . . . . . . . . . . . . . . e e e . . . . e e e . . . . . 
. . . . . . . . . . . . . . e e e e . . . . e e e e . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
controller.moveSprite(mySprite)
scene.cameraFollowSprite(mySprite)
tiles.setTilemap(tiles.createTilemap(
            hex`1000100002010101010101010800000000000000030a0a0a0a0a0a000700000000000000030a0a0a0a0a0a0a090000000000000004050505050505050600000000000000000000000000000007000000000000000000000000000000070000000000000000000000000000000700000000000000000000000000000007000000000000000005050505050505060000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`,
            img`
2 2 2 2 2 2 2 2 2 . . . . . . . 
2 . . . . . . . 2 . . . . . . . 
2 . . . . . . . . . . . . . . . 
2 2 2 2 2 2 2 2 2 . . . . . . . 
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
`,
            [myTiles.tile0,sprites.dungeon.purpleOuterNorth1,sprites.dungeon.purpleOuterNorthWest,sprites.dungeon.purpleOuterWest1,sprites.dungeon.purpleOuterSouthEast,sprites.dungeon.purpleOuterSouth1,sprites.dungeon.purpleOuterSouthWest,sprites.dungeon.purpleOuterEast0,sprites.dungeon.purpleOuterNorthEast,sprites.dungeon.stairLarge,sprites.dungeon.floorDark2,sprites.dungeon.floorDark4,sprites.dungeon.floorDarkDiamond],
            TileScale.Sixteen
        ))
scene.setBackgroundColor(11)
let mySprite2 = sprites.create(img`
. . b b b b . . 
. b 5 5 5 5 b . 
b 5 d 3 3 d 5 b 
b 5 3 5 5 1 5 b 
c 5 3 5 5 1 d c 
c d d 1 1 d d c 
. f d d d d f . 
. . f f f f . . 
`, SpriteKind.Player)
tiles.placeOnTile(mySprite2, tiles.getTileLocation(7, 1))
tiles.placeOnTile(mySprite, tiles.getTileLocation(1, 1))
