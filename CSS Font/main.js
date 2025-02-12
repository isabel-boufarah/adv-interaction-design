// if a flower is touching another spot, make that spot less liekly to have a flower
function adjacentSpots(id, letter) {
    console.log('call adjacent spots')
    //console.log(letterData[letter].oneCount)
    if (letterData[letter].oneCount > 0) {
        // select a point for placement
        let row;
        let col;
        do {
            row = Math.floor(Math.random() * letterData[letter].array.length)
            col = Math.floor(Math.random() * letterData[letter].array[0].length)
        } while(!keepPoint(row, col, letter))

        // select a flower
        let availableIndices = [...Array(components.length).keys()].filter(i => !letterData[letter].flowerIndices.has(i));
        if (availableIndices.length === 0) {
            letterData[letter].flowerIndices.clear();
            availableIndices = [...Array(components.length).keys()];
        }

        let flowerIndex = availableIndices[Math.floor(Math.random() * availableIndices.length)];
        letterData[letter].flowerIndices.add(flowerIndex);

        
        let svg = components[flowerIndex][0].cloneNode(true)
        let width = svg.getAttribute('width') * 0.25
        let height = svg.getAttribute('height') * 0.25   
        Object.assign(svg.style, {
            'position':'absolute',
            'width':`${width}px`,
            'height':`${height}px`,
            'top':`${16*row - height / 2}px`,    //want to position based on center of element
            'left':`${16*col - width / 2}px`,
        })
        document.getElementById(id).appendChild(svg);
        requestAnimationFrame(() => {
            svg.classList.add('grow')
        });

        markSurroundingPoints(row, col, components[flowerIndex][1], letter)
    } else {
        letterData[letter].done = true
    }
   // console.log(letterData[letter].array)
}

function keepPoint(row, col, letter) {
    return letterData[letter].array[row][col] == 1 || (letterData[letter].array[row][col] == 2 && Math.random() < 0.05)
}

function markSurroundingPoints(row, col, index, letter) {
    let array = letterData[letter].array
    let width = index - 1;

    for(let i = row - width; i <= row + width; i++) {
        for(let j = col - width; j <= col + width; j++) {
            if (i >= 0 && i < array.length && j >= 0 && j < array[0].length) {
                if (array[i][j] === 1) {
                    array[i][j] = 2;
                    letterData[letter].oneCount--;
                }
                if (i === row && j === col) {
                    array[i][j] = 3;
                } 
            }
        }
    }
    
}

letterData = {};

function setUp(alphabet) {
    for(let letter of alphabet) {
        const element = document.getElementById(letter)
    
        letterData[letter] = {
            interval: null,
            array: structuredClone(letterEnums[letter]),
            oneCount: letterEnums[letter].flat().filter(e => e == 1).length,
            flowerIndices: new Set(),
            done: false
        };
    
        if (element){
            element.addEventListener("mouseenter", () => {
               if (!letterData[letter].interval && !letterData[letter].done) {
                    console.log('set interval')
                    letterData[letter].interval = setInterval(() => {
                        adjacentSpots(letter, letter);
                    }, 200);
                }
                
            });
            
            element.addEventListener("mouseleave", () => {
                console.log('mouse leave')
                clearInterval(letterData[letter].interval);
                letterData[letter].interval = null;
            });
        }
    
    }
}

//let alphabet = ['A', 'B', 'C', 'D', 'E', 'F','G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
