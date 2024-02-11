import Phaser from "phaser";

const debugDraw = (layer: Phaser.Tilemaps.TilemapLayer, scene: Phaser.Scene) => {
    const debug = scene.add.graphics().setAlpha(0.75)
    layer.renderDebug(debug, {
        tileColor: null,
        collidingTileColor: new Phaser.Display.Color(243, 134, 48, 255),
        faceColor: new Phaser.Display.Color(40, 39, 37, 255),

    })

}

export default debugDraw