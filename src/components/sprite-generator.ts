import Phaser from "phaser";

class SpriteGenerator extends Phaser.Physics.Arcade.Sprite {
    constructor(sceen: Phaser.Scene, x: number, y: number, spriteKey: string, end: number, keyName: string, imm: boolean) {
        body: Phaser.Physics.Arcade.Body
        super(sceen, x, y, spriteKey);
        sceen.add.existing(this);
        this.body = this.body as Phaser.Physics.Arcade.Body;
        if(imm){
            sceen.physics.add.existing(this);
            this.body.setImmovable(true);
        }
        this.createSprite(spriteKey, keyName, end);
    }
    createSprite(spriteKey: string, keyName: string, end: number) {
        this.anims.create({
            key: keyName,
            frames: this.anims.generateFrameNumbers(spriteKey, {
                start: 0,
                end: end
            }),
            frameRate: 10,
            repeat: -1
        })
        this.play(keyName)
    }
}

export default SpriteGenerator