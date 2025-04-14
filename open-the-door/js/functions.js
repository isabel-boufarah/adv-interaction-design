let door = document.getElementById("door");
let content = document.getElementById("content");
let instructions = document.getElementById("instructions");

const controller = new AbortController();
const { signal } = controller;

puzzle1();

function puzzle1() {
    let bounceCount = 0;

    door.src = "doors/door1.jpg"
    instructions.textContent = "Behind this door is a prize."

    let button = document.createElement("button");
    button.textContent = "click"
    button.style.height = "fit-content"
    let sentence = document.createElement("div");
    let simply = document.createElement("span")
    simply.textContent = "Simply"
    let textNode = document.createTextNode("to reveal")

    sentence.appendChild(simply);
    sentence.appendChild(button);
    sentence.appendChild(textNode);
    content.appendChild(sentence);

    sentence.style.position = "fixed"
    sentence.style.top = instructions.getBoundingClientRect().bottom + "px"
    sentence.style.width = "325px"
    sentence.style.display = "flex"
    sentence.style.justifyContent = "space-between"
    sentence.style.alignItems = "center"

    content.addEventListener('mousemove', (e) => {
        let vHeight = content.getBoundingClientRect().height;
        let vWidth = content.getBoundingClientRect().width;
        let buttonX = button.getBoundingClientRect().x
        let buttonY = button.getBoundingClientRect().y

        let xPos = e.clientX
        let yPos = e.clientY
        let xDiff = xPos - buttonX
        let yDiff = yPos - buttonY

        if (xDiff < 105 && xDiff > -20 && yDiff < 41 && yDiff > -20) {
            bounceCount++;
            button.style.position = "fixed"
            let newX = Math.random() * vWidth
            let newY = Math.random() * vHeight
            button.style.left = newX + 'px'
            button.style.top = newY + 'px'
        } 

        if(bounceCount >= 10) {
            simply.textContent = ""
            textNode.textContent = ""
            instructions.textContent = "Is it that hard to click the button?"
            button.style.opacity = 0;

           controller.abort()

            setTimeout(() => {
                puzzle2(sentence);
            }, 3500)
        }
    }, { signal})
}

function puzzle2(sentence) {
    // clean up puzzle 1
    content.removeChild(sentence)
    
    // puzzle 2
    instructions.textContent = "puzzle 2"
}