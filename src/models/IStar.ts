export default interface IStar {
    posX: number
    posY: number
    bright: number
    glow: IGlow
    flash: IFlash | null
}
export interface IGlow {
    color: string
    radial: number,
}
export interface IFlash {
    bright: number
    angle: number
}