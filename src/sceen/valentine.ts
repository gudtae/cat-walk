import Phaser from "phaser";
import SpriteGenerator from "../components/sprite-generator";

export default class Valentine extends Phaser.Scene {
    constructor() {
        super('Valentine')
    }
    create(){
        this.cameras.main.setBackgroundColor('#ffffff')
        const heart1 = new SpriteGenerator(this, 470, 200, 'heart', 1, 'heart', true)
        const heart2 = new SpriteGenerator(this, 470, 550, 'heart', 1, 'heart', true)
        const heart3 = new SpriteGenerator(this, 250, 100, 'heart', 1, 'heart', true)
        const heart4 = new SpriteGenerator(this, 690, 100, 'heart', 1, 'heart', true)
        const heart5 = new SpriteGenerator(this, 150, 300, 'heart', 1, 'heart', true)
        const heart6 = new SpriteGenerator(this, 790, 300, 'heart', 1, 'heart', true)

        const heartS1 = new SpriteGenerator(this, 160, 200, 'heart2', 2, 'heart2', true)
        const heartS2 = new SpriteGenerator(this, 770, 200, 'heart2', 2, 'heart2', true)
        const heartS3 = new SpriteGenerator(this, 350, 150, 'heart2', 2, 'heart2', true)
        const heartS4 = new SpriteGenerator(this, 590, 150, 'heart2', 2, 'heart2', true)
        const heartS5 = new SpriteGenerator(this, 290, 420, 'heart2', 2, 'heart2', true)
        const heartS6 = new SpriteGenerator(this, 650, 420, 'heart2', 2, 'heart2', true)

        const text = this.add.text(200, 300, 'Я люблю тебя, мур', {
            fontSize: '52px',
            color: '#03045e'

        })
        const credits = this.add.text(860, 560, 'Credits', {
            fontSize: '18px',
            color: '#03045e'
        })
        credits.setInteractive()
        credits.on('pointerdown', () => {
            this.scene.start('Credits')
        })
    }   
    update(){

    }
}