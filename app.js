
window.addEventListener('load', () => {
    const sounds = document.querySelectorAll('.sound');
    const pads = document.querySelectorAll('.pads div');
    const visual = document.querySelector('.visual');
    // creating array of color by pasting it from the css
    const colors = [
        '#60d394',
        '#d36060',
        '#c060d3',
        '#d3d160',
        '#60d390',
        '#cf60d3'

    ];

    pads.forEach((pad, i) => {
        pad.addEventListener('click', function () {
            // here the track needs to finish before we can click again so when we click it needs to reset so 
            sounds[i].currentTime = 0;
            // then we can play 

            sounds[i].play();
            createBubbles(i);
        });
    });



    // create a function that creates bubbles
    const createBubbles = (i)=>{
        const bubble = document.createElement('div');
        visual.appendChild(bubble);
        bubble.style.backgroundColor = colors[i];
        bubble.style.animation = 'jump 1s ease-in-out';
        bubble.addEventListener('animationend',function(){
            visual.removeChild(this);

        });
        
    }

});
