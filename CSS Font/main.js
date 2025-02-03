for(let i = 0; i < H.length; i++) {
    for (let j = 0; j < H[0].length; j++){
        if(Math.random() < 0.5) {
            if(H[i][j]){
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
                //let flower = $(`<img src='components/${components[comp]}' style='position: absolute; top: ${i*28}px; left: ${j*28}px'>`)
                //$('#test').append(`<div id=h-${i}${j}></div>`)
                // `<div id=h-${i}${j}></div>`
                fetch('/components/pink-large.svg')
                .then(response => response.text())
                .then(data => {
                    let svg = pinkLarge.clone().css({
                        'position':'absolute',
                        'top':`${28*i}px`,
                        'left':`${28*j}px`
                    })
                    //document.getElementById('test').innerHTML += data;
                    $('#test').append(svg)
                    //const svg = document.getElementById(`h-${i}${j}`).querySelector("svg");
                    //svg.setAttribute("width", "50%"); // Set to half of its original size
                });
            }
            
        }
       
        
    }

}

//eahc letter is a grid with T/F and a random flower is placed in each T index