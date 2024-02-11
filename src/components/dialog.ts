import Phaser from "phaser";

class DialogManager extends Phaser.Scene {
    dialogText: Phaser.GameObjects.Text;
    dialogQueue: string[] = []
    isDialogPlaying: boolean = false
    constructor(sceen: Phaser.Scene) {
        super();
        this.dialogText = sceen.add.text(0, 0, '', {
            fontSize: '36px',
            color: '#fff',
        })
    }

    startDialog(dialog: string[]) {
        if (!this.isDialogPlaying) {
            this.isDialogPlaying = true
            this.dialogQueue = dialog
            this.nextDialog()
        }
    }

    nextDialog() {
        if (this.dialogQueue.length > 0) {
            const current = this.dialogQueue.shift()
            if (current && this.dialogText) {
                console.log(current)
                this.dialogText.setText(current)
                setTimeout(() => {
                    this.nextDialog()
                }, 3000)
            }
        } else {
            this.isDialogPlaying = false
            this.dialogText.setText('')
        }
    }

}

export default DialogManager