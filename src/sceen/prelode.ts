import Phaser from "phaser";
import map from '../assets/map.json'
import star from '../assets/S001_nyknck.png'
import water from '../assets/[A]Water_pipo.png'
import grass from '../assets/Grass_pipo.png'
import base from '../assets/BaseChip_pipo.png'
import player from '../assets/cat_assets.png'
import npc1 from '../assets/kitty.png'
import npc2 from '../assets/Meow-Knight_Idle.png'
import heart from '../assets/Без имени-1.png'
import heart2 from '../assets/heart2.png'
class PreloadGame extends Phaser.Scene {
    constructor() {
        super("PreloadGame");
    }
    preload() {
        this.load.tilemapTiledJSON('map', map)
        this.load.image('waterTile', water)
        this.load.image('grassTile', grass)
        this.load.image('baseTile', base)
        this.load.spritesheet('player', player, {
            frameWidth: 31,
            frameHeight: 36
        })
        this.load.spritesheet('npc1', npc1, {
            frameWidth: 32,
            frameHeight: 32
        })
        this.load.spritesheet('star', star, {
            frameWidth: 32,
            frameHeight: 32
        })
        this.load.spritesheet('npc2', npc2, {
            frameWidth: 32,
            frameHeight: 32
        })
        this.load.spritesheet('heart', heart, {
            frameWidth: 126,
            frameHeight: 107
        })
        this.load.spritesheet('heart2', heart2, {
            frameWidth: 50,
            frameHeight: 53
        })
    }
    create() {
        this.scene.start('Game')
    }
}

export default PreloadGame
