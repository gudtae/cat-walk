import Phaser from 'phaser'

class Player extends Phaser.Physics.Arcade.Sprite {
  constructor(scene: Phaser.Scene, x: number, y: number, playerSpriteKey: string) {
    body: Phaser.Physics.Arcade.Body
    super(scene, x, y, playerSpriteKey);
    scene.add.existing(this);
    scene.physics.add.existing(this);
    this.body = this.body as Phaser.Physics.Arcade.Body;
    this.setCollideWorldBounds(true);
    this.createAnimations(playerSpriteKey);
  }

  createAnimations(playerSpriteKey: string) {
    this.anims.create({
      key: 'down',
      frames: this.anims.generateFrameNumbers(playerSpriteKey, { start: 0, end: 2 }),
      frameRate: 10,
      repeat: -1
    });

    this.anims.create({
      key: 'left',
      frames: this.anims.generateFrameNumbers(playerSpriteKey, { start: 3, end: 5 }),
      frameRate: 10,
      repeat: -1
    });
    this.anims.create({
      key: 'right',
      frames: this.anims.generateFrameNumbers(playerSpriteKey, { start: 6, end: 8 }),
      frameRate: 10,
      repeat: -1
    });
    this.anims.create({
      key: 'up',
      frames: this.anims.generateFrameNumbers(playerSpriteKey, { start: 9, end: 11 }),
      frameRate: 10,
      repeat: -1
    });
  }

  updatePlayer (cursor: Phaser.Types.Input.Keyboard.CursorKeys, input: Phaser.Input.InputPlugin) {
    if(cursor && input.keyboard) {
      const WKey = input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
      const AKey = input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
      const SKey = input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
      const DKey = input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);

      if (AKey.isDown || cursor.left.isDown) {
        this.setVelocityX(-100);
        this.anims.play('left', true);
      } else if (DKey.isDown || cursor.right.isDown) {
        this.setVelocityX(100);
        this.anims.play('right', true);
      } else if (WKey.isDown || cursor.up.isDown) {
        this.setVelocityY(-100);
        this.anims.play('up', true);
      } else if (SKey.isDown || cursor.down.isDown) {
        this.setVelocityY(100);
        this.anims.play('down', true);
      } else {
        this.setVelocityX(0);
        this.setVelocityY(0);
        this.anims.stop();
      }
    }
  }
}

export default Player