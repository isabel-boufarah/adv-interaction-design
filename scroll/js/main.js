let scrollingElement = document.getElementById('scroll-container');

const photoGrid = document.getElementsByClassName('photo-grid')[0]
const stage = document.getElementById('stage1');
const centerImage = document.getElementById('center-image');

const centerX = centerImage.getBoundingClientRect().x + centerImage.getBoundingClientRect().width / 2;
const stageX = stage.getBoundingClientRect().x + stage.getBoundingClientRect().width;

const deltaPosStage1 = centerX - stageX;
//const deltaSize = photoGrid.getBoundingClientRect().width - stage.getBoundingClientRect().width;

scrollingElement.addEventListener('scroll', (e) => {
    const container = document.getElementById('scroll-container');
    const stickySelf = document.getElementById('section2');
    const result = onScroll(container, stickySelf);
    
    if(result >= 0){
       grow(result, 'stage1', deltaPosStage1); 
    } 

    const section3 = document.getElementById('section3');
    const section3Result = onScroll(container, section3);
    translateUpAndOpacity(section3Result, 'postit1', 0, 0.33, 0);
    translateUpAndOpacity(section3Result, 'postit2', 0.33, 0.66, -10);
    translateUpAndOpacity(section3Result, 'postit3', 0.66, 1, 10);
   
});
