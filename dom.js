import { getPhrase } from "./main.js";

let para = document.getElementById('random-text')
let btn = document.getElementById('btn')

btn.addEventListener('click', () => {
  para.innerHTML = getPhrase()
})