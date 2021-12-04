tela('.canvas')
    .click((ctx, e) => {
        ctx.circle(e.x, e.y, 10, "blue");
    })
    .setup((ctx) => {
        ctx.circle(50, 50, 50, "red")
    })

tela(".canvass").click((ctx, e) => {
        ctx.circle(e.x, e.y, 10, "red");
        console.log(ctx)
        console.log(e)
    })
    .setup((ctx) => {
        ctx.circle(50, 50, 50, "blue")
    })