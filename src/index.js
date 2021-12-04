function tela(selector, options = {}) {
    const canvas = document.querySelector(selector);
    const ctx  = canvas.getContext('2d')

    //options
    canvas.width = (options.width == undefined) ? 200 : options.width
    canvas.height = (options.height == undefined) ? 200 : options.height


    const functions = {
        circle: (x, y, size = 5, color = "black") => {
            ctx.beginPath();
            ctx.arc(x, y, size, 0, Math.PI * 2)
            ctx.fillStyle = color;
            ctx.fill();
        },
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
        mouseDown: false,
        mousePosition: {
            x:
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
    canvas.addEventListener('mouseup', (e) => {
        canvasFunction.mouseDown = false;
        // console.log('world')
    })
    //update canvas
    this.update = () => {
        if (this.updateCode != null) this.updateCode(functions, canvasFunction)
        
        requestAnimationFrame(this.update);

    }

    const self = {
        setup: (code) => {window.addEventListener('load', (e) => code(functions, canvasFunction)); return self},
        do: (code) => {code(functions, canvasFunction); return self},
        click: (code) => {canvas.addEventListener('click', (e) => code(functions, canvasFunction, event(e))); return self},
        update: (code) => {
            console.log(code)
            this.updateCode = code
            this.update()
        }
    }

    return self
}
