import { Scene } from 'phaser'
import Player from '../components/player'
// import debugDraw from '../utils/debug'
import SpriteGenerator from '../components/sprite-generator'
import DialogManager from '../components/dialog'


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

        this.player = new Player(this, 128, 0, 'player') //128, 0
        this.cursor = this.input.keyboard!.createCursorKeys();

        const npc1 = new SpriteGenerator(this, 80, 450, 'npc1', 7, 'idle', false)
        const star = new SpriteGenerator(this, 80, 485, 'star', 3, 'shine', true)
        const npc2 = new SpriteGenerator(this, 595, 485, 'npc2', 4, 'idle', false)
        const star2 = new SpriteGenerator(this, 605, 485, 'star', 3, 'shine', true)
        const star3 = new SpriteGenerator(this, 817, 85, 'star', 3, 'shine', true)
        const star4 = new SpriteGenerator(this, 917, 85, 'star', 3, 'shine', true)

        const dialogManager = new DialogManager(this);
        this.physics.add.collider(this.player, star, () => {
            dialogManager.startDialog(this, ['Привет, котик', 'Знаешь что сегодня за день?', 'С 14 февраля нас!', 'Я мечтаю провести этот день с тобой...', 'Это небольшая прогулка для тебя по тому что я успела сделать', "Я надеюсь что тебе понравится, иди дальше к домику"], ['Мур!', 'Лись :3'])
            star.destroy()
        })
        this.physics.add.collider(this.player, star2, () => {
            dialogManager.startDialog(this, [
                'Мур, сколько лет, сколько зим',
                'Такое ощущение что мы встретились только вчера и вот уже прошло почти 5 лет',
                "Грустный факт мы ни разу не праздновали 14 февраля рядом, это грустно...",
                "Давай в следующем году исправим?",
                "Следуй дальше к фонтану"
            ], [
                "Бегу", "Лись :3"
            ])
            star2.destroy()
        })

        this.physics.add.collider(this.player, star3, () => {
            dialogManager.startDialog(this, [
                "Я рада что ты есть в моей жизни,",
                "Благодаря тебе я расту и развиваюсь, и я не всегда могу сказать насколько я тебе благодарна",
                "Я хочу что бы знал, что я счастлива рядом с тобой, и надеюсь это взаимно :3",
                "Я хочу тебе пожелать больше меня в твоей жизни, желательно в личном пространстве, не болей и оставайся таким же мур",
                "Я тебя тьмок, а дальше к следующей звездочке"
            ], [
                'Тьмок', 'Лись :3'
            ])
            star3.destroy()
        })
        this.physics.add.collider(this.player, star4, () => {
            this.scene.start('Valentine')
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

