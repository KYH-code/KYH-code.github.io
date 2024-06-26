const content = "👋Hi, I'm yunhyeon";
const text = document.querySelector(".textArea");
let i = 0;

function typing(){
    let txt = content[i++];
    text.innerHTML += txt === "\n" ? "<br/>" : txt;
    if (i > content.length) {
        text.textContent = "";
        i = 0;
    }
}
setInterval(typing, 200)