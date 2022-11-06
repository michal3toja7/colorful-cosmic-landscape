import React, {useEffect, useRef, useState} from 'react';
import Star from "../models/star";
import starsGenerator from "../services/starsGenerator";

function SpaceComponent() {
    const canvasRef = useRef<HTMLCanvasElement>(null)
    const contextRef = useRef<CanvasRenderingContext2D | null>(null)
    const [stars, setStars] = useState<Star[]>(starsGenerator(window.innerWidth, window.innerHeight))


    useEffect(() => {
        initCanvas()
    }, [])

    const drawStars = (context: CanvasRenderingContext2D) => {
        console.log(stars)
        for (let star of stars){
            context.fillStyle = "white"
            context.beginPath();
            context.arc(star.posX, star.posY, star.bright, 0, 2 * Math.PI,);
            context.fill();
        }
    }


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
        drawStars(context)
        contextRef.current = context
    }

    return (
        <canvas
            ref={canvasRef}/>
    )
}

export default SpaceComponent