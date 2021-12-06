let colorInput = document.querySelector('.color');
let color = "green"

let draw = tela('.draw', {
    width: 800,
    height: 500,
}).update((draw, canvas) => {
    if(canvas.mouseDown) draw.circle(canvas.mousePosition.x, canvas.mousePosition.y, 10, color, null);
})

colorInput.addEventListener('change', (e) => {
    color = colorInput.value;
})