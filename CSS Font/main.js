//for each item in array, if its true, decide to draw with 25% probability
function decideForEachTrue(id) {
    for(let i = 0; i < H.length; i++) {
        for (let j = 0; j < H[0].length; j++){
            if(H[i][j]){
                if(Math.random() < 0.25) {
                    let size = Math.floor(Math.random() * 3);
                    let width;
                    if(size == 0) {
                        width = '50px'
                    } else if(size == 1){
                        width = '100px'
                    } else {
                        width = '130px'
                    }
                    let comp = Math.floor(Math.random() * components.length)
                    let svg = components[comp].clone().css({
                        'position':'absolute',
                        'top':`${30*i}px`,
                        'left':`${30*j}px`,
                        'width':`${components[comp].attr('width') * 0.4}px`,
                        'height':`${components[comp].attr('height') * 0.4}px`
                    })
                    $(`#${id}`).append(svg)
                }
                
            }  
        }
    }
}

function selectFromSet(id) {

}

function decideForEachTrueIncProb(id) {
    let totalTrue = H.filter(e => e).length
    for(let i = 0; i < H.length; i++) {
        for (let j = 0; j < H[0].length; j++){
            if(H[i][j]){
                if(Math.random() < 1/totalTrue) {
                    totalTrue--;
                    let size = Math.floor(Math.random() * 3);
                    let width;
                    if(size == 0) {
                        width = '50px'
                    } else if(size == 1){
                        width = '100px'
                    } else {
                        width = '130px'
                    }
                    let comp = Math.floor(Math.random() * components.length)
                    let svg = components[comp].clone().css({
                        'position':'absolute',
                        'top':`${30*i}px`,
                        'left':`${30*j}px`,
                        'width':`${components[comp].attr('width') * 0.4}px`,
                        'height':`${components[comp].attr('height') * 0.4}px`
                    })
                    $(`#${id}`).append(svg)
                }
                
            }  
        }
    }
}

function dontSelectDirectNeighbors(id) {

}

// decideForEachTrue('test')
// decideForEachTrueIncProb('test2')


// if an index is chosen, don't choose direct neighbors?
// decide on a subset number, if an index is chosen, don't choose itself or direct neighbors

// choose the subset and then draw the flowers, don't decide one at a time?

//inc probability as you go

//https://sighack.com/post/poisson-disk-sampling-bridsons-algorithm
// the issue is we can have neighboring points sometimes
function brisdon(id) {

}

// if a flower is touching another spot, make that spot less liekly to have a flower
function adjacentSpots(id) {
    let letterArray = HEnum.slice()

    let threshold = letterArray.flat().filter(e => e == 1).length * 0.05
    if (letterArray.flat().filter(e => e == 1).length > 0) {
    //for(let x = 0; x < 40; x++) {
        console.log('in while')
        // select a point, more prob it is a 1 than a 2
        let row = Math.floor(Math.random() * letterArray.length)
        let col = Math.floor(Math.random() * letterArray[0].length)

        while(!keepPoint(row, col, letterArray)) {
            row = Math.floor(Math.random() * letterArray.length)
            col = Math.floor(Math.random() * letterArray[0].length)
        }

        // select flower
        let flowerIndex = Math.floor(Math.random() * components.length)
        let width = components[flowerIndex][0].attr('width') * 0.3
        let height = components[flowerIndex][0].attr('height') * 0.3
        let svg = components[flowerIndex][0].clone().css({
            'position':'absolute',
            'width':`${width}px`,
            'height':`${height}px`,
            'top':`${22*row - height / 2}px`,    //want to position based on center of element
            'left':`${22*col - width / 2}px`,
        })
        $(`#${id}`).append(svg)
        svg.addClass('grow')

        letterArray = markSurroundingPoints(row, col, letterArray, components[flowerIndex][1])
    }
    console.log(letterArray)
}

function keepPoint(row, col, array) {
    if (array[row][col] == 0) {
        return false
    } else if(array[row][col] == 1){
        return true
    } else if(array[row][col] == 2) {
        return Math.random() < 0.15
    } else {
        return false
    }
}

// just marks surrounding edges
function markSurroundingPoints(row, col, array, index) {
    let width = index - 1;
    array[row][col] = 3
    for(let i = row - width; i <= row + width; i++) {
        for(let j = col - width; j <= col + width; j++) {
            if(i == row && j == col) {
                array[i][j] = 3;
            }
            else if(i >= 0 && i < array.length && j >= 0 && j < array[0].length && array[i][j] == 1) {
                array[i][j] = 2
            }
        }
    }
    return array;
}

const element = document.getElementById("test3"); // Replace with your element's ID
let intervalId;

element.addEventListener("mouseenter", () => {
    // maybe here copy the letter array and pass it to
    intervalId = setInterval(adjacentSpots, 100, 'test3'); // Calls function every 100ms
});

element.addEventListener("mouseleave", () => {
    clearInterval(intervalId); // Stops calling the function
});
