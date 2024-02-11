import Phaser from "phaser";

class DialogManager extends Phaser.Scene {
    dialogText: Phaser.GameObjects.Text;
    dialogQueue: string[] = []
    isDialogPlaying: boolean = false
    graphics: Phaser.GameObjects.Graphics;
    constructor(sceen: Phaser.Scene) {
        super();
        this.dialogText = sceen.add.text(0, 0, '', {
            fontSize: '24px',
            color: '#fff',
        })
        this.dialogText.setPosition(0, 500)
        this.graphics = sceen.add.graphics()
    }

    startDialog(dialog: string[]) {
        if (!this.isDialogPlaying) {
            this.graphics.fillStyle(0x8A6240, 1)
            this.graphics.fillRect(0, 500, 940, 600)
            this.isDialogPlaying = true
            this.dialogQueue = dialog
            this.nextDialog()
        }
    }

    nextDialog() {
        if (this.dialogQueue.length > 0) {
            this.dialogText.setDepth(1)
            const current = this.dialogQueue.shift()
            if (current && this.dialogText) {
                this.dialogText.setText(current)
                setTimeout(() => {
                    this.nextDialog()
                }, 3000)
            }
        } else {
            this.graphics.clear()
            this.isDialogPlaying = false
            this.dialogText.setText('')
        }
    }

}

export default DialogManager