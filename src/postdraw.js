const postdraw = () => {
    index++
    ctx.restore()
}

const predraw = (context, canvas) => {
    context.save()
    resizeCanvasToDisplaySize(context, canvas)
    const { width, height } = context.canvas
    context.clearRect(0, 0, width, height)
}

function resizeCanvasToDisplaySize(canvas) {

    const { width, height } = canvas.getBoundingClientRect()

    if (canvas.width !== width || canvas.height !== height) {
        canvas.width = width
        canvas.height = height
        return true // here you can return some usefull information like delta width and delta height instead of just true
        // this information can be used in the next redraw...
    }

    return false
}