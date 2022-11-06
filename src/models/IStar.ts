export default interface IStar {
    posX: number
    posY: number
    bright: number
    glow: IGlow
}
export interface IGlow {
    color: string
    radial: number,
}