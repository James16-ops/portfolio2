const text = "Aspiring Programmer";
const typingElement = document.getElementById("typing");

let index = 0;

function typeText() {
    if(index < text.length){
        typingElement.innerHTML += text.charAt(index);
        index++;
        setTimeout(typeText, 100);
    }
}

typeText();

document.addEventListener("mousemove", (e) => {

    const x = (window.innerWidth / 2 - e.clientX) / 50;
    const y = (window.innerHeight / 2 - e.clientY) / 50;

    document.body.style.backgroundPosition =
        `${50 + x}% ${50 + y}%`;

});
