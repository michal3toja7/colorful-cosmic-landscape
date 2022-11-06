import Star from "../models/star";

const starsGenerator = (width: number, height: number, maxBright: number = 6, basicIterations: number = 20, sideIterations: number = 30, radiusSideArea: number = 400): Star[] => {
    let listOfStar: Star[] = basicStarsGenerate(width, height, basicIterations, maxBright)
    let newStars: Star[] = []
    for (const star of listOfStar) {
        const minWidth = (star.posX - radiusSideArea) ? (star.posY - radiusSideArea) : 0
        const maxWidth = (star.posX + radiusSideArea) <= width ? (star.posX + radiusSideArea) : width
        const minHeight = (star.posY - radiusSideArea) ? (star.posY - radiusSideArea) : 0
        const maxHeight = (star.posY + radiusSideArea) <= height ? (star.posY + radiusSideArea) : height
        newStars.push(star)
        newStars.push(...basicStarsGenerate(maxWidth, maxHeight, sideIterations, star.bright, minWidth, minHeight))
    }

    return newStars

}

const basicStarsGenerate = (width: number, height: number, iterations: number = 10, maxBright: number = 8, minWidth: number = 0, minHeight: number = 0) => {
    let listOfStar: Star[] = []
    for (const x of Array.from(Array(iterations).keys())) {
        listOfStar.push(
            {
                posX: getRandomInt(minWidth, width * 2),
                posY: getRandomInt(minHeight, height * 2),
                bright: getRandomInt(1, maxBright)
            }
        )
    }

    return listOfStar

}


function getRandomInt(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default starsGenerator