import Star from "../models/star";

const starsGenerator = (width: number, height: number): Star[] => {
    let listOfStar: Star[] = basicStarsGenerate(width, height, 20, 6)
    let newStars: Star[] = []
    for (const star of listOfStar) {
        const minWidth = (star.posX - 400) ? (star.posY - 400) : 0
        const maxWidth = (star.posX + 400) <= width ? (star.posX + 400) : width
        const minHeight = (star.posY - 400) ? (star.posY - 400) : 0
        const maxHeight = (star.posY + 400) <= height ? (star.posY + 400) : height
        newStars.push(star)
        newStars.push(...basicStarsGenerate(maxWidth, maxHeight, 30, star.bright, minWidth, minHeight ))
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