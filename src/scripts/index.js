import { button, model } from "./model"

const $content = document.querySelector(".content") //why adding $ to var name? recommended! in order to determine DOM objects from primitive types to easily work with
const $menuButton = document.querySelector(".sidebar")

const contentHtml = model.map(b=>b.toHTML()).join("")
const append = button.map(btn=>btn.toHtml()).join("")

$content.insertAdjacentHTML("beforeend", contentHtml)
$menuButton.insertAdjacentHTML("beforeend", append)