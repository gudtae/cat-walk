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
        const layerHouse = map.createLayer('houseLayer', tileSetBase!)
        const layerInsideH = map.createLayer('insidehouse', tileSetBase!)

        layerTree!.setCollisionByProperty({ collides: true })
        layerWater!.setCollisionByProperty({ collides: true })
        layerHouse!.setCollisionByProperty({ collides: true })
        layerInsideH!.setCollisionByProperty({ collides: true })

        this.player = new Player(this, 128, 0, 'player')
        this.cursor = this.input.keyboard!.createCursorKeys();

        const npc1 = new SpriteGenerator(this, 80, 450, 'npc1', 7, 'idle', false)
        const star = new SpriteGenerator(this, 80, 485, 'star', 3, 'shine', true)
        const npc2 = new SpriteGenerator(this, 595, 485, 'npc2', 4, 'idle', false)
        const star2 = new SpriteGenerator(this, 605, 485, 'star', 3, 'shine', true)
        const star3 = new SpriteGenerator(this, 817, 85, 'star', 3, 'shine', true)

        const dialogManager = new DialogManager(this);
        this.physics.add.collider(this.player, star, () => {
            dialogManager.startDialog(['Привет, котик', 'Знаешь что сегодня за день?'])

        })
        this.physics.add.collider(this.player, star2, () => {
            console.log('npc2')
        })

        this.physics.add.collider(this.player, star3, () => {
            console.log('npc3')
        })

        if (layerWater && layerTree && layerHouse && layerInsideH) {
            this.physics.add.collider(this.player, layerWater);
            this.physics.add.collider(this.player, layerTree);
            this.physics.add.collider(this.player, layerHouse)
            this.physics.add.collider(this.player, layerInsideH)
        }

    }

    update() {
        if (this.cursor && this.player) {
            this.player.updatePlayer(this.cursor, this.input)
        }
    }



}

export default GameMain

