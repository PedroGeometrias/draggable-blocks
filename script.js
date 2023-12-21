let activeBlock = null;
let offsetX = 0;
let offsetY = 0;

document.querySelectorAll('.block').forEach(block => {
    

    const centerX = window.innerWidth / 2 - block.offsetWidth / 2;
    const centerY = window.innerHeight / 2 - block.offsetHeight / 2;

    block.style.left = `${centerX}px`;
    block.style.top = `${centerY}px`;
    
    block.addEventListener('mousedown', function(e) {
        activeBlock = this;
        offsetX = e.clientX - activeBlock.getBoundingClientRect().left;
        offsetY = e.clientY - activeBlock.getBoundingClientRect().top;

        function onMouseMove(e) {
            if (!activeBlock) return;
            activeBlock.style.left = e.clientX - offsetX + 'px';
            activeBlock.style.top = e.clientY - offsetY + 'px';
        }

        
        document.addEventListener('mousemove', onMouseMove);

        document.addEventListener('mouseup', () => {
            document.removeEventListener('mousemove', onMouseMove);
            activeBlock = null;
        }, { once: true });
    });
});

