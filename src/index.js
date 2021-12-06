function tela(selector, options = {}) {
    const canvas = document.querySelector(selector);
    const ctx  = canvas.getContext('2d')

    //options
    if(typeof(options.size) == 'string') {
        if (options.size === 'full') {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        }
    } else if(typeof(options.size) == 'number') {

    } else {
        canvas.width = (options.width == undefined) ? 200 : options.width
        canvas.height = (options.height == undefined) ? 200 : options.height
    }



    const draw = {
        circle: (x, y, size = 5, fillColor = "white", strokeColor) => {
            ctx.beginPath();
            ctx.arc(x, y, size, 0, Math.PI * 2)
            fillColor == null ? ctx.fillStyle = "rgba(0,0,0,0)" : ctx.fillStyle = fillColor
            strokeColor == null ? ctx.strokeStyle = "rgba(0,0,0,0)" : ctx.strokeStyle = strokeColor
            ctx.fill();
            ctx.stroke();
        },
        line: (start, end, size, color, lineCap) => {
            ctx.beginPath();
            ctx.moveTo(start[0], start[1]);
            ctx.lineTo(end[0], end[1]);
            ctx.lineWidth = size
            ctx.strokeStyle = color
            if(lineCap === 'round') ctx.lineCap = 'round'; 
            ctx.stroke();
        }
    }
    const canvasFunction = {
        size: (x, y) => {
            canvas.width = x
            canvas.height = y;
        },
        center: {
            x: canvas.width / 2,
            y: canvas.height / 2
        },
        rect: canvas.getBoundingClientRect(),
        mouseDown: false,
        mousePosition: {
            
        }
    }

    const event = function (e) {
        const rect = canvas.getBoundingClientRect()
        return {
            x: e.clientX - rect.left,
            y: e.clientY - rect.top
        }
    }


    //mouse down
    canvas.addEventListener('mousedown', (e) => {
        canvasFunction.mouseDown = true;
        // console.log('hello')
    })
    window.addEventListener('mouseup', (e) => {
        canvasFunction.mouseDown = false;
        // console.log('world')
    })
    //update canvas
    this.update = () => {
        this.updateCode(draw, canvasFunction)
        requestAnimationFrame(this.update);
    }
    //mouse move
    canvas.addEventListener('mousemove', (e) => {
        canvasFunction.mousePosition.x = e.x - canvasFunction.rect.left
        canvasFunction.mousePosition.y = e.y - canvasFunction.rect.top
    })

    const self = {
        setup: (code) => {window.addEventListener('load', (e) => code(draw, canvasFunction)); return self},
        do: (code) => {code(draw, canvasFunction); return self},
        click: (code) => {canvas.addEventListener('click', (e) => code(draw, canvasFunction, event(e))); return self},
        update: (code) => {
            console.log(code)
            this.updateCode = code
            this.update()
            return self
        }
    }

    return self
}
