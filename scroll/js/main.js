let scrollingElement = document.getElementById('scroll-container');

scrollingElement.addEventListener('scroll', (e) => {
    const container = document.getElementById('scroll-container');
    const stickySelf = document.getElementById('section2');
    const result = onScroll(container, stickySelf);
    console.log(result);
    if(result >= 0){
       grow(result, 'stage1', deltaStage1); 
    } 
});

const stage = document.getElementById('stage1');
const centerImage = document.getElementById('center-image');

const centerX = centerImage.getBoundingClientRect().x + centerImage.getBoundingClientRect().width / 2;
const stageX = stage.getBoundingClientRect().x + stage.getBoundingClientRect().width;

const deltaStage1 = centerX - stageX;
