import { row, col } from "../scripts/utils"

class Block{
    constructor(type,data){
        this.type = type
        this.data = data
    }
    toHTML(){
        throw('toHTML function must be implemented') //it must be implemented
    }
}

//כל קלאס של בלוק ספציפי יורש מהקלאס בלוק, כאשר בכל קלאס המתודה toHTML - המימוש שלה יהייה שונה
export class TitleBlock extends Block{ //inherits from class block
    constructor(data){ // 
        super('title',data) //constructor of block
    }
    toHTML(){ // 
        return row(col(`<h1>${this.data}</h1>`))
    }
}

export class TextBlock extends Block{ //inherits from class block
    constructor(data){ // 
        super('text',data) //constructor of block
    }
    toHTML(){ // 
        return row(col(`<p>${this.data}</p>`))
    }
}

export class ColumnsBlock extends Block{ //inherits from class block
    constructor(data){ // 
        super('columns',data) //constructor of block
    }
    toHTML(){ // 
        return row(this.data.map(item => col(item)).join(""))
    }
}

export class ImageBlock extends Block{ //inherits from class block
    constructor(data){ // 
        super('image',data) //constructor of block
    }
    toHTML(){ // 
        return row(col(`<img src="${this.data}">`))
    }
}