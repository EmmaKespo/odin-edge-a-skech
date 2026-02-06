const container = document.getElementById('container');
const resizebtn = document.getElementById('resizebtn');
const CONTAINER_SIZE = 960;
function createGrid(size) {
    container.innerHTML = '';
    const squareSize = CONTAINER_SIZE / size;
    for (let i = 0; i < size * size; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;
        square.dataset.darkness = 0;
        square.addEventListener('mouseover', () => {
            let darkness = number(square.dataset.darkness);
            if (darkness === 0) {
                const r = Math.floor(Math.random() * 256);
                const g = Math.floor(Math.random() * 256);
                const b = Math.floor(Math.random() * 256);
                square.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
            }
            if (darkness < 10) {
                darkness++;
                square.style.filter = `brightness(${100 - darkness * 10}%)`;
            }
        });
        container.appendChild(square);
    }
}

resizebtn.addEventListener('click', () => {
    let size = prompt('Enter grid size (1-100):');
    size = number(size);
    if (isNaN(size) || size < 1 || size > 100) {
        alert('Please enter a valid number between 1 and 100.');
        return;
    }
    createGrid(size);
});
        