import React, {useEffect, useRef} from 'react';

function SpaceComponent() {
    const canvasRef = useRef<HTMLCanvasElement>(null)
    const contextRef = useRef<CanvasRenderingContext2D | null>(null)


    useEffect(() => {
        initCanvas()
    }, [])


    const initCanvas = () => {
        const canvas = canvasRef.current;
        if (!canvas)
            return
        canvas.width = window.innerWidth * 2;
        canvas.height = window.innerHeight * 2;
        canvas.style.width = `${window.innerWidth}px`;
        canvas.style.height = `${window.innerHeight}px`;

        const context = canvas.getContext("2d")
        if (!context)
            return;
        context.fillStyle = "black"
        context.fillRect(0, 0, canvas.width, canvas.height);
        contextRef.current = context
    }

    return (
        <canvas
            ref={canvasRef}/>
    )
}

export default SpaceComponent