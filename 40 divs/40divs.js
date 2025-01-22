let green = "#6DE84B"
let pink = "#FB4E93"
let orange = "#FFAB37"
let blue = "#49D1FE"
let yellow = "#f1f43c"
let isDisplayNone = false

for (let i = 1; i <= 40; i++){
    let div = $("<div></div>").attr("class", `div${i}`)
    
    $('.container').append(div)
}

$('.div1').css("background-color", pink)
$('.div1').click(() => {
    $('.div1').animate({borderRadius: "104px"})
})

$('.div2').css("background-color", green)
$('.div2').click(() => {
    $('.div2').addClass("div2-active")
})

$('.div3').click(() => {
    $('.div3').addClass("div3-active")
})

let div4clicked = false
$('.div4').click(() => {
    if(!div4clicked){
        $('.div4').addClass("div4-active")
        let smallDiv = `<div style='width: 100px; height: 100px; background-color: ${blue}'></div>`
        $('.div4').append(smallDiv)
        div4clicked = true
    }

})

$('.div5').css({
    'background-color': `${yellow}`,
    'position': 'relative',
    'overflow': 'hidden'
})
$('.div5').click((event) => {
    let posX = $('.div5').offset().left;
    let posY = $('.div5').offset().top;
    let text = `<div style='position: absolute; top: ${event.pageY - posY}px; left: ${event.pageX - posX}px'>click</div>`
    $('.div5').append(text)
})

$('.div6').click(() => {
    $('.div6').addClass("div6-active")
})

$('.div7').click(() => {
    $('.div7').addClass("div7-active")
})

$('.div8').css('background-color', pink)
let div8index = 1;
$('.div8').click(() => {
    let newIndex = Math.floor(Math.random() * 5)
    while (newIndex == div8index) {
        newIndex = Math.floor(Math.random() * 5)
    }
    console.log(newIndex)
    if (newIndex == 0) {
        $('.div8').css('background-color', green)
        div8index = 0;
        console.log("hello")
    }
    else if (newIndex == 1) {
        $('.div8').css('background-color', pink)
        div8index = 1;
    }
    else if (newIndex == 2) {
        $('.div8').css('background-color', orange)
        div8index = 2;
    }
    else if (newIndex == 3) {
        $('.div8').css('background-color', blue)
        div8index = 3;
    }
    else if (newIndex == 4) {
        $('.div8').css('background-color', yellow)
        div8index = 4;
    }
})

$('.div9').css('background-color', yellow)
$('.div9').click(() => {
    $('.div9').css('background-color', 'white')
})

$('.div10').css('background-color', green)
$('.div10').click(() => {
    $('.div10').css({
        'height': '400px',
        'transition' : '.5s'
    })
})

$('.div11').css({
    'background-color': pink,
    'position': 'relative',
    'left':'0'
})
$('.div11').click(() => {
    $('.div11').animate({'top': '2500px'}, 3000)
})

$('.div12').css('background-color', yellow)
$('.div12').click((event) => {
    $('body').css('display', 'none')
    isDisplayNone = true
    event.stopImmediatePropagation()
})

$(document).click(() => {
    if(isDisplayNone) {
        $('body').css('display', 'block')
    }
})

$('.div13').css('background-color', green)

$('.div14').css('background-color', orange)

$('.div15').css('background-color', blue)

$('.div16').css('background-color', green)

let audio = new Audio('sound-effect.mp3')
let volumeUp = $('<div>volume up</div>')
$('.div16').click(() => {
    console.log('play audio')
    audio.play()
    $('.div16').append(volumeUp)
})

audio.onended = function () {
    console.log('ended')
    volumeUp.remove()
}

$('.div17').css('background-color', orange)

let textBox = $(`<textarea></textarea>`)
    .css({
        'width': '200px',
        'height': '200px',
        'background-color': blue,
        'resize':'none',
        'border-style': 'none' ,
        'border-color': 'Transparent'
    })
$('.div18').append(textBox)

$('.div19').css('background-color', pink)
$('.div19').append('<p>Will this typing effect work?</p>')
$('.div19').click(()=> {
    $('.div19').addClass('div19-active')
})

$('.div20').css({'background-color':yellow, 'position':'relative'})
$('.div20').click(() => {
    for (let i = 0; i < 10; i++){
        for(let j = 0; j < 10; j++){
            console.log(i * 20 + ' ' + j * 20)
            let circle = $('<div></div>')
                .css({
                    'width': '10px',
                    'height':'10px',
                    'border-radius':'50%',
                    'background-color': 'white',
                    'opacity': '0'
                })
            $('.div20').append(circle.css({'position':'absolute', 'top': i * 20 + 5, 'left': j * 20 + 5})) 
            circle.delay(i * 500 + j * 50).animate({
                'opacity': 1
            }, 500);
        }
    }
})

$('.div21').css('background-color', blue)
$('.div21').click(() => {
    $('.div21').css('opacity', Math.random())
})

$('.div22').css('background-color', pink)
$('.div22').click(() => {
    $('.div22').css({
        'border-radius':'0px 100px',
        'transition':'.5s'
    })
})

$('.div23').css('background-color', yellow)
$('.div23').click(() => {
    $('.div23').css({
        'background':`linear-gradient(${green}, ${yellow})`
    })
})

$('.div24').css('background-color', green)
$('.div24').click(() => {
    alert('Hey there')
})

$('.div25').css('background-color', orange)
let shape = $('<div><div>').css({
    'opacity':'0',
    'width': '100px',
    'height':'100px',
    'border-radius':'50%',
    'background-color':'white',
    'position':'relative',
    'top':'50px',
    'left':'50px'
})
$('.div25').append(shape)
$('.div25').hover(() => {
    shape.css({'opacity':'1'})
}, () => {
    shape.css({'opacity':'0'})
})

$('.div26').css('background-color', yellow)
let div26clicked = false
$('.div26').click(() => {
    if(!div26clicked) {
        $('.div26').append("This div will scroll vertically because I'm adding some really long text here. If you are curious what I'm typing, keep scrolling to see more text. This assignment has been fun but it's getting pretty hard! Do you have any ideas for more interactions? I'm trying to utilize different html and css features to come up with unique divs. It's hard to make each one different. Do you like clicking or hovering microinteractions more? What is your favorite div? I really like the one that puts the word click wherever you click. Hopefully this is enough scrolling to make this div interesting! Catch ya on the next one!")
        $('.div26').css({
            'overflow-y':'scroll'
        })
    }
})

$('.div27').css('background-color', orange)
$('.div27').mousedown((event) => {
    event.stopPropagation()
    $('.div27').addClass('mousedown')
})
.mouseup((event) => {
    event.stopPropagation()
    $('.div27').removeClass('mousedown')
})

$('.div28').css('background-color', blue)
$('.div28').click(() => {
    $('.div28').css({
        'border-radius' : '100px 0 0 0',
        'transition' : '3s'
    })
})

let div29first = false
$('.div29').css({'background-color':pink, 'position':'relative'})
$('.div29').mouseover(() => {
    if (!div29first) {
        for (let i = 0; i < 3; i++) {
            let circle = $('<div></div>')
                .css({
                    'width': '25px',
                    'height':'25px',
                    'border-radius':'50%',
                    'background-color': 'white',
                    'opacity': '1'
                })
            $('.div29').append(circle.css({'position':'absolute', 'top': '86.5px', 'left': i * 36.5 + 50})) 
        }
        div29first = true
    }
})

$('.div30').css('background-color', green)
let fonts = ['Arial', 'Verdana', 'Times New Roman', 'Courier New', 'Inter', 'Roboto', 'Smooch Sans', 'Playwrite VN', 'Lexend Giga', 'Oswald', 'Bebas Neue', 'EB Garamond', 'Permanent Marker', 'Varela Round']
let fontIndex = 0;
let text = $('<span>Click again for a new font</span>').css({
    'opacity':'0',
    'font-family':'Arial'
})
$('.div30').append(text)
$('.div30').click(() => {
    let newIndex;
    do {
        newIndex = Math.floor(Math.random() * fonts.length)
    } while (newIndex == div8index)
    fontIndex = newIndex
    text.css({
        'opacity':'1',
        'font-family':fonts[fontIndex]
    })
})

$('.div31').css('background-color', orange)
$('.div31').click(() => {
    $('.div31').text('just wait...')
    setTimeout(() => {
        $('.div31').text('thanks for your patience')
    }, 3000)
})

$('.div32').css('background-color', green)
$('.div32').click(() => {
    var randomColor = Math.floor(Math.random()*16777215).toString(16);
    $('.div32').css({
        'border': `3px solid #${randomColor}`
    })
    console.log(randomColor)
})

$('.div33').css("background-color", pink)
$('.div33').click(() => {
    $('.div33').css({
        'background-image': 'url("dog_pic.webp")',
        'background-size':'contain'
    })
})

$('.div34').css('background-color', yellow)
$('.div34').mouseover(() => {
    $('body').css('filter','blur(10px)')
}).mouseout(() => {
    $('body').css('filter','none')
})

$('.div35').css('background-color', blue)
$('.div35').click(() => {
    $('.div35').addClass('div35-active')
})

$('.div36').css('background-color', pink)
$('.div36').click(() => {
    $('body').css('background-color', 'black')
    setTimeout(() => {
        $('body').css('background-color', 'white')
    }, 3000)
})

$('.div37').css({'background-color': yellow, 'position':'relative'})
let img = $('<img src="star.svg">').css({
    'opacity': '0',
    'position':'relative',
    'top':'63px',
    'left':'63px'
})
$('.div37').append(img)
$('.div37').mouseover(() => {
    img.css('opacity', '1')
    $('.div37').css('background-color','white')
}).mouseout(() => {
    img.css('opacity', '0')
    $('.div37').css('background-color',yellow)
})

$('.div38')
    .css('background-color', blue)
    .append('<a href="https://fonts.google.com/" target="blank" style="width:200px; height:200px; display:block"></a>')

$('.div39').css('background-color', green)
$('.div39').click(() => {
    window.print()
})

let div40 = false
$('.div40').css({'background-color':orange, 'position':'relative'})
$('.div40').click(() => {
    if (!div40) {
        $('.div40').append(`
            <div style="position:relative; top: 80px; left:47px; display: flex; align-items:center">
            <img src="waving_hand_24dp_000000.svg">
            Goodbye!
            <div>
        `)
        div40 = true
    }

})
