tela('.canvas', {
    width: '500',
    height: '500',
})
    .click((ctx, canvas, e) => {
        ctx.circle(e.x, e.y, 10, "blue");
    })
    .setup((ctx, canvas) => {
        // canvas.size(500, 600)
        ctx.circle(canvas.center.x, canvas.center.y, 50, "red")
    })

tela(".canvass", {})
    .click((ctx, canvas, e) => {
        ctx.circle(e.x, e.y, 10, "red");
    })
    .setup((ctx, canvas) => {
        // canvas.size(500, 600)
        ctx.circle(canvas.center.x, canvas.center.y, 50, "blue")
        console.log(canvas.mouseDown);
    }).update((ctx, canvas) => {    
        // console.log(canvas.mouseDown);
    })



let draw = tela('.draw', {
    width: 800,
    height: 500,
}).update((ctx, canvas) => {
    if(canvas.mouseDown) ctx.circle()
})