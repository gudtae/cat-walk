import Phaser from "phaser";

export default class Credits extends Phaser.Scene {
    constructor() {
        super("Credits");
    }
    create() {
        this.cameras.main.setBackgroundColor('#ffffff')
        this.add.text(100, 100, 'Credits', {
            fontSize: '52px',
            color: '#03045e'
        })
        const autor = this.add.text(100, 200, 'made by gudtae', {
            fontSize: '24px',
            color: '#03045e'
        })
        const tileset = this.add.text(100, 250, 'tileset by pipoya', {
            fontSize: '24px',
            color: '#03045e'
        })
        const player = this.add.text(100, 300, 'player sprite by pipoya', {
            fontSize: '24px',
            color: '#03045e'
        })
        const npc1 = this.add.text(100, 350, 'npc kitty sprite by caz-creates-games', {
            fontSize: '24px',
            color: '#03045e'
        })
        const npc2 = this.add.text(100, 400, 'npc nekonin sprite by elthen', {
            fontSize: '24px',
            color: '#03045e'
        })
        const heart = this.add.text(100, 450, 'heart sprite by kububbis', {
            fontSize: '24px',
            color: '#03045e'
        })
        const smallHeart = this.add.text(100, 500, 'small heart sprite by gpway', {
            fontSize: '24px',
            color: '#03045e'
        })
        const creditArr = [autor, tileset, player, npc1, npc2, heart, smallHeart]

        creditArr.forEach((credit) => {
            credit.setInteractive()
        })
        autor.on('pointerdown', () => {
            window.open('https://github.com/gudtae', '_blank')
        })
        tileset.on('pointerdown', () => {
            window.open('https://pipoya.itch.io/pipoya-rpg-tileset-32x32', '_blank')
        })
        player.on('pointerdown', () => {
            window.open('https://pipoya.itch.io/pipoya-free-rpg-character-sprites-nekonin', '_blank')
        })
        npc1.on('pointerdown', () => {
            window.open('https://caz-creates-games.itch.io/kitty', '_blank')
        })
        npc2.on('pointerdown', () => {
            window.open('https://elthen.itch.io/2d-pixel-art-cat-sprites', '_blank')
        })
        heart.on('pointerdown', () => {
            window.open('https://kububbis.itch.io/aesthetic-heart-icon-pack', '_blank')
        })
        smallHeart.on('pointerdown', () => {
            window.open('https://gpway.itch.io/2d-pixel-heart ', '_blank')
        })


        const back = this.add.text (860, 560, 'Back', {
            fontSize: '18px',
            color: '#03045e'
        })
        back.setInteractive()
        back.on('pointerdown', () => {
            this.scene.start('Game')
        })
    }
}