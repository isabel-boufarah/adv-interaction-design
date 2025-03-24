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
function grow(ratio, id, deltaPosX, deltaPosY) {
    if(ratio > 1) return; 

    const stage = document.getElementById(id);
    
    const translateX = deltaPosX > 0 ? Math.min(deltaPosX * ratio, deltaPosX) : Math.max(deltaPosX * ratio, deltaPosX);  //will this have to be math.max when negative?, maybe need to check abs val
    const translateY = deltaPosY > 0 ? Math.min(deltaPosY * ratio, deltaPosY) : Math.max(deltaPosY * ratio, deltaPosY);  //will this have to be math.max when negative?, maybe need to check abs val
    //const scale = Math.min(deltaSize * ratio, deltaSize);

    stage.style.transform = `scale(${ratio + 1}) translate(${translateX}px, ${translateY}px)`;
    
}

function translateUpAndOpacity(result, id, totalDelta, units, min, max, rotate) {
    const el = document.getElementById(id);

    if(result < 0) {
        el.style.opacity = 0;
    } else {
        // lets say there are three post its
        // for first one, only want result from 0 to 0.33
        let scale = result < min ? 0 : result < max ? (result - min) /(max - min) : 1

        if(scale > 0) el.style.opacity = 1;
        if (scale == 0) el.style.opacity = 0;

        el.style.transform = `translateY(${scale * totalDelta}${units}) rotate(${rotate}deg)`;

    }
    
}

function isInViewport(value) { 
    const item = value.getBoundingClientRect(); 
    return ( 
        item.top <= 0 || 
        item.bottom >= ( 
            window.innerHeight || 
            document.documentElement.clientHeight)
    ); 
}

// the scale is slighly off

function nattyCollageTransform(result) {
    console.log('natty collage', result)
    const nattyCollage1 = document.getElementById('natty1');
    const nattyCollage2 = document.getElementById('natty2');
    const nattyCollage3 = document.getElementById('natty3');
    const nattyCollage4 = document.getElementById('natty4');
    const nattyCollage5 = document.getElementById('natty5');




    if (result >= 0 && result <= 1 / 6) {
        let scale = result * 6;        
        nattyCollage1.style.opacity = scale;
        nattyCollage1.style.transform = `scale(${scale})`;
    } else if(result > 1/6 && result <= 2/6) {
        let scale = (result - 1/6) * 6
        nattyCollage2.style.opacity = scale;
        nattyCollage2.style.transform = `scale(${scale})`;

        nattyCollage1.style.opacity = 1;
        nattyCollage1.style.transform = `scale(1)`;
    } else if(result > 2/6 && result <= 3/6) {
        let scale = (result - 2/6) * 6
        nattyCollage3.style.opacity = scale;
        nattyCollage3.style.transform = `scale(${scale})`;

        nattyCollage2.style.opacity = 1;
        nattyCollage2.style.transform = `scale(1)`;
    } else if(result > 3/6 && result <= 4/6) {
        let scale = (result - 3/6) * 6
        nattyCollage4.style.opacity = scale;
        nattyCollage4.style.transform = `scale(${scale})`;

        nattyCollage3.style.opacity = 1;
        nattyCollage3.style.transform = `scale(1)`;
    } else if(result > 4/6 && result <= 5/6) {
        let scale = (result - 4/6) * 6
        nattyCollage5.style.opacity = scale;
        nattyCollage5.style.transform = `scale(${scale})`;

        nattyCollage4.style.opacity = 1;
        nattyCollage4.style.transform = `scale(1)`;
    } else if(result > 5/6 && result <= 1) {
        const nattyCollage = document.getElementById('natty6');
        let scale = (result - 5/6) * 6
        console.log(scale)
        nattyCollage.style.opacity = scale;
        nattyCollage.style.transform = `scale(${scale})`;

        nattyCollage5.style.opacity = 1;
        nattyCollage5.style.transform = `scale(1)`;
    }
}

function increaseOpacity(id, result) {
    if(result < 0.1) {
        const el = document.getElementById(id);
        el.style.opacity = 0;
        return;
    }

    if(result > 0.9) {
        const el = document.getElementById(id);
        el.style.opacity = 1;
        return;
    }

    const el = document.getElementById(id);
    el.style.opacity = result;
}