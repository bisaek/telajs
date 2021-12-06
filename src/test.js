let colorInput = document.querySelector('.color');
let color = colorInput.value;
lastMousePosition = [0, 0]

let draw = tela('.draw', {
        width: 800,
        height: 500,
    }).update((draw, canvas) => {
        if(canvas.mouseDown) draw.line(lastMousePosition, [canvas.mousePosition.x, canvas.mousePosition.y], 10, color, "round")
        lastMousePosition = [canvas.mousePosition.x, canvas.mousePosition.y]
    })

colorInput.addEventListener('change', (e) => {
    color = colorInput.value;
})