let door = document.getElementById("door");
let doorBehind = document.getElementById("door-behind");
let content = document.getElementById("content");
let instructions = document.getElementById("instructions");

const controller = new AbortController();
const { signal } = controller;

puzzle0();

function transition(i, j, callback, cleanUp) {    
    door.addEventListener('animationend', () => {
        console.log('animation ended')
        door.src = `doors/door${i}.jpg`
        doorBehind.src = `doors/door${j}.jpg`
        door.style.animation = "";
        doorBehind.style.opacity = 0;
        cleanUp();
        callback();
    }, {once: true});
    
    door.style.animation = "open 3s"
    doorBehind.style.opacity = 1;
}

function puzzle0() {
    door.src = "doors/door0.jpg"
    doorBehind.src = "doors/door1.jpg"
    instructions.textContent = "Behind this door is a prize."

    let button = document.createElement("button");
    button.textContent = "knock"
    button.style.height = "fit-content"
    let sentence = document.createElement("div");
    let simply = document.createElement("span")
    simply.textContent = "Please"
    let textNode = document.createTextNode("to reveal")

    sentence.appendChild(simply);
    sentence.appendChild(button);
    sentence.appendChild(textNode);
    content.appendChild(sentence);

    sentence.style.position = "fixed"
    sentence.style.top = instructions.getBoundingClientRect().bottom + "px"
    sentence.style.width = "377px"
    sentence.style.display = "flex"
    sentence.style.justifyContent = "space-between"
    sentence.style.alignItems = "center"

    button.onclick = () => {
        transition(1, 2, puzzle1, () => {
            content.removeChild(sentence)
        })
    }
}
function puzzle1() {

    let bounceCount = 0;

    //door.src = "doors/door1.jpg"
    instructions.textContent = "Oh, another door!"

    let button = document.createElement("button");
    button.textContent = "knock"
    button.style.height = "fit-content"
    let sentence = document.createElement("div");
    let simply = document.createElement("span")
    simply.textContent = ""
    let textNode = document.createTextNode("one more time")

    sentence.appendChild(simply);
    sentence.appendChild(button);
    sentence.appendChild(textNode);
    content.appendChild(sentence);

    sentence.style.position = "fixed"
    sentence.style.top = instructions.getBoundingClientRect().bottom + "px"
    sentence.style.width = "363px"
    sentence.style.height = "78px"
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

        if (xDiff < 127 && xDiff > -20 && yDiff < 83 && yDiff > -20) {
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
            instructions.textContent = "Is it that hard to knock?"
            button.style.opacity = 0;

            controller.abort()

            transition(2, 3, puzzle2, () => {
                content.removeChild(sentence)
                
            })

            
        //    // do animation
        //     setTimeout(() => {
        //         clean1(sentence);
        //     }, 3500)
        }
    }, { signal})
}

// function clean1(sentence) {
//     content.removeChild(sentence)
    
//     puzzle2();
// }

function puzzle2() {
    door.src = "doors/door2.jpg"
    instructions.textContent = "You need to knock LOUDER!"

    let button = document.createElement("button");
    button.textContent = "knock"
    content.appendChild(button);

    let timeout;

    button.addEventListener("mousedown", () => {
        timeout = setTimeout(() => {
            console.log('you knocked')

            instructions.textContent = "Good job!"
            content.removeChild(button)
            // do animation

            setTimeout(() => {
                clean2(button);
            }, 3500)
        }, 3000)
    })

    button.addEventListener("mouseup", () => {
        clearTimeout(timeout)
        console.log('you stopped knocking')
    })
}

function clean2() {
}