// if an index is chosen, don't choose direct neighbors?
// decide on a subset number, if an index is chosen, don't choose itself or direct neighbors

// choose the subset and then draw the flowers, don't decide one at a time?

//inc probability as you go

//https://sighack.com/post/poisson-disk-sampling-bridsons-algorithm
// the issue is we can have neighboring points sometimes
function brisdon(id) {

}

// if a flower is touching another spot, make that spot less liekly to have a flower
function adjacentSpots(id, letter) {
    console.log('call adjacent spots')
    console.log(window.letterData[letter].oneCount)
    if (window.letterData[letter].oneCount > 0) {

        // select a point for placement
        let row;
        let col;
        do {
            row = Math.floor(Math.random() * window.letterData[letter].array.length)
            col = Math.floor(Math.random() * window.letterData[letter].array[0].length)
        } while(!keepPoint(row, col, letter))

        // select a flower
        let availableIndices = [...Array(components.length).keys()].filter(i => !window.letterData[letter].flowerIndices.has(i));
        if (availableIndices.length === 0) {
            window.letterData[letter].flowerIndices.clear();
            availableIndices = [...Array(components.length).keys()];
        }

        let flowerIndex = availableIndices[Math.floor(Math.random() * availableIndices.length)];
        window.letterData[letter].flowerIndices.add(flowerIndex);

        
        let svg = $(components[flowerIndex][0])
        let width = svg.attr('width') * 0.25
        let height = svg.attr('height') * 0.25   
        svg.css({
            'position':'absolute',
            'width':`${width}px`,
            'height':`${height}px`,
            'top':`${16*row - height / 2}px`,    //want to position based on center of element
            'left':`${16*col - width / 2}px`,
        })
        $(`#${id}`).append(svg)
        requestAnimationFrame(() => {
            svg.addClass('grow')
        });

        markSurroundingPoints(row, col, components[flowerIndex][1], letter)
    }
    console.log(window.letterData[letter].array)
}

function keepPoint(row, col, letter) {
    return window.letterData[letter].array[row][col] == 1 || (window.letterData[letter].array[row][col] == 2 && Math.random() < 0.1)
}

// just marks surrounding edges
function markSurroundingPoints(row, col, index, letter) {
    //TODO: do we want to block of the direct neighbor layer
    let array = window.letterData[letter].array
    let width = index - 1;

    for(let i = row - width; i <= row + width; i++) {
        for(let j = col - width; j <= col + width; j++) {
            if (i >= 0 && i < array.length && j >= 0 && j < array[0].length) {
                if (array[i][j] === 1) {
                    array[i][j] = 2;
                    window.letterData[letter].oneCount--;
                }
                if (i === row && j === col) {
                    array[i][j] = 3;
                } 
            }
        }
    }
    
}

window.letterData = {};

//let alphabet = ['A', 'B', 'C', 'D', 'E', 'F','G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
let alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'H']
for(let letter of alphabet) {
    const element = document.getElementById(letter)
    window[`interval${letter}`];
    window[`array${letter}`] = structuredClone(window[`${letter}Enum`])
   // let threshold = window[`${letter}Enum`].flat().filter(e => e == 1).length * 0.05
    window[`${letter}Indicies`] = []

    window.letterData[letter] = {
        interval: null,
        array: structuredClone(window[`${letter}Enum`]),
        oneCount: window[`${letter}Enum`].flat().filter(e => e == 1).length,
        flowerIndices: new Set()
    };

    if (element){
        element.addEventListener("mouseenter", () => {
            //window[`interval${letter}`] = setInterval(adjacentSpots, 200, letter, window[`array${letter}`], letter);

           if (!window.letterData[letter].interval) {
                window.letterData[letter].interval = setInterval(() => {
                    adjacentSpots(letter, letter);
                }, 200);
            }
            
        });
        
        element.addEventListener("mouseleave", () => {
            console.log('mouse leave')
            //clearInterval(window[`interval${letter}`]); // Stops calling the function

            clearInterval(window.letterData[letter].interval);
            window.letterData[letter].interval = null;
        });
    }

}
