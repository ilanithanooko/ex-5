import { col, btn } from "../scripts/utils"

class Button{
    constructor(data){
        this.data = data
    }
    toHtml(){
        throw('toHTML function must be implemented')
    }
}

export class MenuButton extends Button{
    constructor(data){
        super(data)
    }
    toHtml(){
        return col(btn(this.data))
    }
}