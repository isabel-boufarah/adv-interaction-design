// return scroll value given container and sticky element
function onScroll(container, stickySelf) {
    const containerRect = container.getBoundingClientRect();
    const selfRect = stickySelf.getBoundingClientRect();
    const offTop = containerRect.y - selfRect.y;

    if (containerRect.height < selfRect.height) {
        const viewHeight = selfRect.height - containerRect.height;
        return(offTop / viewHeight);
    } else {
        const viewHeight = containerRect.height;
        const result = offTop < 0 ? offTop / viewHeight : offTop / viewHeight + 1;
        return(result);
    }
}

// grow x2 and move to center
function grow(ratio, id, deltaPos) {
    if(ratio > 1) return; 

    const stage = document.getElementById(id);
    
    const translateX = Math.min(deltaPos * ratio, deltaPos);  //will this have to be math.max when negative?, maybe need to check abs val
    const translateY = Math.min(deltaPos * ratio, deltaPos);
    //const scale = Math.min(deltaSize * ratio, deltaSize);

    stage.style.transform = `scale(${ratio + 1}) translate(${translateX}px, ${translateY}px)`;
    
}

function translateUpAndOpacity(result, id, min, max, rotate) {
    const el = document.getElementById(id);

    if(result < 0) {
        el.style.opacity = 0;
    } else {
        // lets say there are three post its
        // for first one, only want result from 0 to 0.33
        let scale = result < min ? 0 : result < max ? (result - min) /(max - min) : 1

        if(scale > 0) el.style.opacity = 1;
        if (scale == 0) el.style.opacity = 0;

        el.style.transform = `translateY(${scale * -300}px) rotate(${rotate}deg)`;

    }
    
}