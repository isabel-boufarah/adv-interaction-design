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
function grow(ratio, id, delta) {
    if(ratio > 1) return; 

    const stage = document.getElementById(id);
    
    const translateX = Math.min(delta * ratio, delta);  //will this have to be math.max when negative?, maybe need to check abs val
    const translateY = Math.min(delta * ratio, delta);

    stage.style.transform = `scale(${ratio + 1}) translate(${translateX}px, ${translateY}px)`;
    
}