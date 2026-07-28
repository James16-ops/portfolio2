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
