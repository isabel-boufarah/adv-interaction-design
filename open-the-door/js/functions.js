let door = document.getElementById("door");
let doorBehind = document.getElementById("door-behind");
let content = document.getElementById("content");
let instructions = document.getElementById("instructions");
let knock = new Audio("sounds/knock.mp3")
knock.loop = false;
let doorbell = new Audio("sounds/doorbell.mp3")
doorbell.loop = true;


puzzle0();

function transition(i, j, callback, cleanUp) {    
    door.addEventListener('animationend', () => {
        console.log('animation ended')
        door.src = `doors/door${i}.png`
        doorBehind.src = `doors/door${j}.png`
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

    knock.loop = false;

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
        knock.play()
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

    function handleMouseMove(e) {
        let vHeight = content.getBoundingClientRect().height - 20;
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

            content.removeEventListener("mousemove", handleMouseMove)

            transition(2, 3, puzzle2, () => {
                content.removeChild(sentence)
                
            })

        }
    }
    
    content.addEventListener("mousemove", handleMouseMove);
}


function puzzle2() {
    door.src = "doors/door2.jpg"
    instructions.textContent = "You need to knock LOUDER!"

    knock.loop = true;

    let button = document.createElement("button");
    button.textContent = "knock"
    content.appendChild(button);

    let timeout;

    button.addEventListener("mousedown", () => {
        knock.play();
        timeout = setTimeout(() => {
            console.log('you knocked')
            instructions.textContent = "Good job!"
            content.removeChild(button)
            knock.pause()

            setTimeout(() => {
                
                transition(3, 1, puzzle3, () => {})
            }, 2000)
        }, 3500)
    })

    button.addEventListener("mouseup", () => {
        clearTimeout(timeout)
        console.log('you stopped knocking')
        knock.pause();
    })
}

function puzzle3() { 
    instructions.textContent = "Ring the bell!"

    let bell = document.createElement("img");
    bell.src = "doors/bell.svg"
    bell.style.width = "70px"
    bell.style.transformOrigin = "top center"
    bell.style.marginTop = "24px"

    content.appendChild(bell);

    let timer = null;
    let ringComplete = null;

    function handleMouseMove(e) {
        clearTimeout(timer);
        doorbell.play()

        if(ringComplete == null) {
            bell.style.animation = "ring infinite 1s linear forwards"
            ringComplete = setTimeout(() => {
                console.log('rung for 3 seconds')
                clearTimeout(timer)
                instructions.textContent = "Nice ringing!"
                bell.style.animation = ""
                doorbell.pause()
                content.removeEventListener('mousemove', handleMouseMove)
                transition(0, 1, puzzle0, () => {
                    content.removeChild(bell)
                })
            }, 3500)
        }

        timer = setTimeout(() => {
            clearTimeout(ringComplete)
            doorbell.pause()
            bell.style.animation = ""
            ringComplete = null;
            console.log('stopped ringing')
        }, 500)
    }

    content.addEventListener('mousemove', handleMouseMove);
}

function puzzle4() {
    instructions.textContent = "puzzle 4"
}