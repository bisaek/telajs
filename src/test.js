let draw = tela('.draw', {
    width: 800,
    height: 500,
}).update((draw, canvas) => {
    if(canvas.mouseDown) draw.circle(canvas.mousePosition.x, canvas.mousePosition.y, 10, "blue");
})

function doo() {
    draw.do((ctx, canvas) => {
        ctx.circle(canvas.center.x, canvas.center.y, 50, "green");
    })
}