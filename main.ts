controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (toad.vy == 0) {
        toad.vy = -150
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`lava0`, function (sprite, location) {
    game.gameOver(false)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`finish`, function (sprite, location) {
    game.setGameOverMessage(true, "WIN!!")
    game.gameOver(true)
})
let mySprite: Sprite = null
let toad: Sprite = null
toad = sprites.create(assets.image`toad`, SpriteKind.Player)
controller.moveSprite(toad)
info.setLife(3)
controller.moveSprite(toad, 100, 0)
tiles.setCurrentTilemap(tilemap`level1`)
toad.ay = 300
scene.cameraFollowSprite(toad)
scene.setBackgroundColor(9)
for (let value of tiles.getTilesByType(assets.tile`myTile5`)) {
    mySprite = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . f e e e e e f . . . . 
        . . . . e e f e e e f e e . . . 
        . . . e e 1 c f e f c 1 e e . . 
        . . e e e 1 1 e e e 1 1 e e e . 
        . . e e e e e e e e e e e e e . 
        . . e e e e f f f f f e e e e . 
        . . . e e f e e e e e f e e . . 
        . . . . e d d d d d d d e . . . 
        . . . . . . 1 . . . 1 . . . . . 
        . . . . . . 1 . . . 1 . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    tiles.placeOnTile(toad, tiles.getTileLocation(0, 0))
    tiles.setTileAt(value, sprites.castle.tilePath2)
}
