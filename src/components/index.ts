import { Scene } from 'phaser'
import Player from '../sceen/player'
// import debugDraw from '../utils/debug'
import SpriteGenerator from './sprite-generator'
import DialogManager from './dialog'


class GameMain extends Scene {
    player: Player | null
    cursor: Phaser.Types.Input.Keyboard.CursorKeys | null
    constructor() {
        super('Game')
        this.player = null
        this.cursor = null
    }
    create() {
        const map = this.make.tilemap({ key: 'map' })
        const tileSetWater = map.addTilesetImage('water', 'waterTile')
        const tileSetGrass = map.addTilesetImage('grass', 'grassTile')
        const tileSetBase = map.addTilesetImage('base', 'baseTile')
        const layerGround = map.createLayer('ground', tileSetGrass!)
        const layerWater = map.createLayer('waterLayer', tileSetWater!)
        const layerBridge = map.createLayer('bridgeLayer', tileSetBase!)
        const layerTree = map.createLayer('treeLayer', tileSetBase!)

        layerTree!.setCollisionByProperty({ collides: true })
        layerWater!.setCollisionByProperty({ collides: true })

        this.player = new Player(this, 128, 0, 'player')
        this.cursor = this.input.keyboard!.createCursorKeys();
        const npc = new SpriteGenerator(this, 80, 450, 'npc1', 7, 'idle')
        const star = new SpriteGenerator(this, 80, 485, 'star', 3, 'shine')
        const dialogManager = new DialogManager(this);
        this.physics.add.collider(this.player, star, () => {
            this.player?.setImmovable(true)
            dialogManager.startDialog(['Привет, котик', 'Знаешь что сегодня за день?'])

        })
        if (layerWater) {
            this.physics.add.collider(this.player, layerWater);
        }
        if (layerTree) {
            this.physics.add.collider(this.player, layerTree);
        }
    }

    update() {
        if (this.cursor && this.player) {
            this.player.updatePlayer(this.cursor, this.input)
        }
    }



}

export default GameMain

