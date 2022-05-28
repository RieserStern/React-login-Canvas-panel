import React from 'react'
import useCanvas from './useCanvas'

// const _postdraw = () => {
//     index++
//     ctx.restore()
// }

// const _predraw = (context, canvas) => {
//     context.save()
//     resizeCanvasToDisplaySize(context, canvas)
//     const { width, height } = context.canvas
//     context.clearRect(0, 0, width, height)
// }

// function resizeCanvasToDisplaySize(canvas) {

//     const { width, height } = canvas.getBoundingClientRect()

//     if (canvas.width !== width || canvas.height !== height) {
//         canvas.width = width
//         canvas.height = height
//         return true // here you can return some usefull information like delta width and delta height instead of just true
//         // this information can be used in the next redraw...
//     }

//     return false
// }

// const Canvas = props => {
//     const { draw, predraw=_predraw, postdraw=_postdraw } = props
//     const canvasRef = useCanvas(draw, {predraw, postdraw})
//     return <canvas ref={canvasRef} {...rest}/>
// }

// export default Canvas