let scrollingElement = document.getElementById('scroll-container');

const photoGrid = document.getElementsByClassName('photo-grid')[0]
const stage = document.getElementById('stage1');
const centerImage = document.getElementById('center-image');

const centerX = centerImage.getBoundingClientRect().x + centerImage.getBoundingClientRect().width / 2;
const stageX = stage.getBoundingClientRect().x + stage.getBoundingClientRect().width;

const deltaPos = centerX - stageX;
//const deltaSize = photoGrid.getBoundingClientRect().width - stage.getBoundingClientRect().width;

scrollingElement.addEventListener('scroll', (e) => {
    const container = document.getElementById('scroll-container');

    const stickySelf = document.getElementById('section2');
    if(isInViewport(stickySelf)) {
        const result = onScroll(container, stickySelf);
    
        if(result >= 0){
            grow(result, 'stage1', deltaPos, deltaPos); 
        } 
    }
  

    const section3 = document.getElementById('section3');
    if(isInViewport(section3)) {
        const section3Result = onScroll(container, section3);
        translateUpAndOpacity(section3Result, 'postit1', -300, 'px', 0, 1/7, 0);
        translateUpAndOpacity(section3Result, 'postit2', -300, 'px', 1/7, 2/7, -10);
        translateUpAndOpacity(section3Result, 'postit3', -300, 'px', 2/7, 3/7, 10);
        translateUpAndOpacity(section3Result, 'postit4', -300, 'px', 3/7, 4/7, -6);
        translateUpAndOpacity(section3Result, 'postit5', -300, 'px', 4/7, 5/7, 3);
        translateUpAndOpacity(section3Result, 'postit6', -300, 'px', 5/7, 6/7, 8);
        translateUpAndOpacity(section3Result, 'postit7', -300, 'px', 6/7, 1, -2);
    }
    

    const section4 = document.getElementById('section4');
    if(isInViewport(section4)) {
        const section4Result = onScroll(container, section4);

        translateUpAndOpacity(section4Result, 'week1', -82, 'vh', 0, 1/18, 0);
        translateUpAndOpacity(section4Result, 'week2', -82, 'vh', 1/18, 2/18, week2Rotation);
        translateUpAndOpacity(section4Result, 'week3', -82, 'vh', 2/18, 3/18, week3Rotation);
        translateUpAndOpacity(section4Result, 'week4', -82, 'vh', 3/18, 4/18, week4Rotation);
        translateUpAndOpacity(section4Result, 'week5', -82, 'vh', 4/18, 5/18, week5Rotation);
        translateUpAndOpacity(section4Result, 'week6', -82, 'vh', 5/18, 6/18, week6Rotation);
        translateUpAndOpacity(section4Result, 'week7', -82, 'vh', 6/18, 7/18, week7Rotation);
        translateUpAndOpacity(section4Result, 'week8', -82, 'vh', 7/18, 8/18, week8Rotation);
        translateUpAndOpacity(section4Result, 'week10', -82, 'vh', 8/18, 9/18, week10Rotation);
        translateUpAndOpacity(section4Result, 'weekwb', -82, 'vh', 9/18, 10/18, weekwbRotation);
        translateUpAndOpacity(section4Result, 'week11', -82, 'vh', 10/18, 11/18, week11Rotation);
        translateUpAndOpacity(section4Result, 'week12', -82, 'vh', 11/18, 12/18, week12Rotation);
        translateUpAndOpacity(section4Result, 'week14', -82, 'vh', 12/18, 13/18, week14Rotation);
        translateUpAndOpacity(section4Result, 'week15', -82, 'vh', 13/18, 14/18, week15Rotation);
        translateUpAndOpacity(section4Result, 'week16', -82, 'vh', 14/18, 15/18, week16Rotation);
        translateUpAndOpacity(section4Result, 'week17', -82, 'vh', 15/18, 16/18, week17Rotation);
        translateUpAndOpacity(section4Result, 'weeksb', -82, 'vh', 16/18, 17/18, weeksbRotation);
        translateUpAndOpacity(section4Result, 'week21', -82, 'vh', 17/18, 1, week21Rotation);
    }

    const section5 = document.getElementById('section5');
    if(isInViewport(section5)) {
        const section5Result = onScroll(container, section5);
        if(section5Result >= 0){
            grow(section5Result, 'stage2', 0, deltaPos); 
        }
    }
  
   
});

let week2Rotation = Math.floor(Math.random() * 19) - 8
let week3Rotation = Math.floor(Math.random() * 19) - 8
let week4Rotation = Math.floor(Math.random() * 19) - 8
let week5Rotation = Math.floor(Math.random() * 19) - 8
let week6Rotation = Math.floor(Math.random() * 19) - 8
let week7Rotation = Math.floor(Math.random() * 19) - 8
let week8Rotation = Math.floor(Math.random() * 19) - 8
let week10Rotation = Math.floor(Math.random() * 19) - 8
let weekwbRotation = Math.floor(Math.random() * 19) - 8
let week11Rotation = Math.floor(Math.random() * 19) - 8
let week12Rotation = Math.floor(Math.random() * 19) - 8
let week14Rotation = Math.floor(Math.random() * 19) - 8
let week15Rotation = Math.floor(Math.random() * 19) - 8
let week16Rotation = Math.floor(Math.random() * 19) - 8
let week17Rotation = Math.floor(Math.random() * 19) - 8
let weeksbRotation = Math.floor(Math.random() * 19) - 8
let week21Rotation = Math.floor(Math.random() * 19) - 8