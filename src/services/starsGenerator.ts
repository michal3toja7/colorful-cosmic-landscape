import Star from "../models/star";

const starsGenerator = (width: number, height: number): Star[] => {
    let listOfStar: Star[] = []
    for (const x of Array.from(Array(10).keys())) {
        console.log("dupa")
        listOfStar.push(
            {
                posX: getRandomInt(0, width*2),
                posY: getRandomInt(0, height*2),
                bright: getRandomInt(1, 8)
            }
        )
    }
    console.log(listOfStar)

    return listOfStar

}


function getRandomInt(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default starsGenerator