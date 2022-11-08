import IStar, {IFlash, IGlow} from "../models/IStar";

const starsGenerator = (width: number, height: number, maxBright: number = 6, basicIterations: number = 20, sideIterations: number = 30, radiusSideArea: number = 400): IStar[] => {
    let listOfStar: IStar[] = []
    // generate basic stars and stars around basic stars
    for (const star of basicStarsGenerate(width, height, basicIterations, maxBright)) {
        const minWidth = (star.posX - radiusSideArea) ? (star.posY - radiusSideArea) : 0
        const maxWidth = (star.posX + radiusSideArea) <= width ? (star.posX + radiusSideArea) : width
        const minHeight = (star.posY - radiusSideArea) ? (star.posY - radiusSideArea) : 0
        const maxHeight = (star.posY + radiusSideArea) <= height ? (star.posY + radiusSideArea) : height
        listOfStar.push(star)
        listOfStar.push(...basicStarsGenerate(maxWidth, maxHeight, sideIterations, star.bright, minWidth, minHeight))
    }

    //make bacground
    listOfStar.push(...basicStarsGenerate(width, height, 1000, 2))


    return listOfStar

}

const basicStarsGenerate = (width: number, height: number, iterations: number = 10, maxBright: number = 8, minWidth: number = 0, minHeight: number = 0) => {
    let listOfStar: IStar[] = []
    for (const x of Array.from(Array(iterations).keys())) {
        const bright = getRandomInt(1, maxBright)
        listOfStar.push(
            {
                posX: getRandomInt(minWidth, width * 2),
                posY: getRandomInt(minHeight, height * 2),
                bright: bright,
                glow: glowGenerate(bright),
                flash: flashGenerator(bright)
            }
        )
    }

    return listOfStar
}

const flashGenerator = (brigth: number): IFlash | null => {
    if (getRandomInt(0, 10) === 9) {
        return {
            bright: getRandomInt(0, (brigth * 20)),
            angle: getRandomInt(0, 90)
        }
    }
    return null

}

const baseColors = [
    "#532662",
    "#18a2d8",
    "#e04ea0",
    "#181b2c",
    "#442eae",
    "#fadbf6",
    "#1177ba",
]
const colorIntensive = [
    "40",
    "33",
    "26",
    "1A",
    "0D"
]

const glowGenerate = (bright: number): IGlow => {
    const baseCol = baseColors[getRandomInt(0, (baseColors.length - 1))]
    const intensiveCol = colorIntensive[getRandomInt(0, (colorIntensive.length - 1))]
    return {
        color: baseCol + intensiveCol,
        radial: getRandomInt(0, (bright * 100))
    }
}


function getRandomInt(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default starsGenerator