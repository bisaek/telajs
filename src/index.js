function tela(selector, options) {
    const canvas = document.querySelector(selector);
    const ctx  = canvas.getContext('2d')

    const functions = {
        circle: (x, y, size = 5, color = "black") => {
            ctx.beginPath();
            ctx.arc(x, y, size, 0, Math.PI * 2)
            ctx.fillStyle = color;
            ctx.fill();
        }
    }

    const event = function (e) {
        const rect = canvas.getBoundingClientRect()
        return {
            x: e.clientX - rect.left,
            y: e.clientY - rect.top
        }
    }

    const self = {
        setup: (code) => {code(functions); return self},
        do: (code) => {code(functions); return self},
        click: (code) => {canvas.addEventListener('click', (e) => code(functions, event(e))); return self}
    }

    return self
}
