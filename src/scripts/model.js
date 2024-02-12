import { ColumnsBlock, ImageBlock, TextBlock, TitleBlock } from "../classes/blocks"
import img  from "../assets/Braude.jpg"
import { MenuButton } from "../classes/menuButton"

const tempString = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam temporibus alias tempore aut. Corrupti, fuga, expedita ducimus praesentium cumque perspiciatis accusantium quod nihil, totam quasi corporis harum provident accusamus assumenda."

export const model = [
    new TitleBlock("Hello, Braude!"),
    new TextBlock(tempString),
    new ColumnsBlock([tempString, tempString, tempString]),
    new ImageBlock(img)
]

export const button = [
    new MenuButton("Button 1"),
    new MenuButton("Button 2")
]