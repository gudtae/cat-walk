import Phaser from "phaser";

class DialogManager extends Phaser.Scene {
    graphics: Phaser.GameObjects.Graphics;
    choiceButtons: Phaser.GameObjects.Text[] = [];
    dialogText: Phaser.GameObjects.Text;
    dialogQueue: string[] = []
    choices: string[] = [];
    isDialogPlaying: boolean = false
    isDialogEnded: boolean = false
    constructor(scene: Phaser.Scene) {
        super();
        this.dialogText = scene.add.text(20, 20, '', {
            fontSize: '24px',
            color: '#03045e',
            wordWrap: {
                width: 900,
                useAdvancedWrap: true
            }
        })
        this.dialogText.setPosition(0, 500)
        this.graphics = scene.add.graphics()
    }

    startDialog(scene: Phaser.Scene, dialog: string[], choice: string[]) {
        if (!this.isDialogPlaying) {
            this.isDialogEnded = false
            this.graphics.fillStyle(0x90e0ef, 1)
            this.graphics.fillRect(0, 500, 940, 600)
            this.isDialogPlaying = true
            this.dialogQueue = dialog
            this.choices = choice
            this.nextDialog(scene)
        }
    }

    nextDialog(scene: Phaser.Scene) {
        if (this.dialogQueue.length > 0) {
            this.dialogText.setDepth(1)
            const current = this.dialogQueue.shift()
            if (current && this.dialogText) {
                this.dialogText.setText(current)
                setTimeout(() => {
                    this.nextDialog(scene)
                }, 5000)
            }
        } else {
            this.isDialogPlaying = false
            this.dialogText.setText('')
            if (this.choices.length != 0) {
                this.choiceButton(scene, this.choices)
            }
        }
    }

    choiceButton(scene: Phaser.Scene, choice: string[]) {
        choice.forEach((c, i) => {
            const button = scene.add.text(20, 505 + (i * 50), `Тык: ${c}`, {
                fontSize: '24px',
                color: '#03045e',
                wordWrap: {
                    width: 900,
                    useAdvancedWrap: true
                }
            })
            this.choiceButtons.push(button)
            button.setInteractive()
            button.on('pointerdown', () => {
                this.destroyObject(this.choiceButtons)
                this.graphics.clear(); // Очищаем графику
                this.isDialogEnded = true
            });
        })
    }

    destroyObject(object: any){
        if (Array.isArray(object)){
            object.forEach((value) => {
                value.destroy()
            })
        }
    }

    isDialog() {
        return this.isDialogEnded
    }

}

export default DialogManager