export class Rombo  {
    private diagonalMayor: number
    private diagonalMenor: number
    
    constructor(diagonalMayor: number, diagonalMenor: number) {
        this.diagonalMayor = diagonalMayor
        this.diagonalMenor = diagonalMenor       
        
    }
    public getdiagonalMayor(){
        return this.diagonalMayor
}
    public getdiagonalMenor(){
        return this.diagonalMenor
}
    public setdiagonalMayor(diagonalMayor:number){
        this.diagonalMayor = diagonalMayor
}
    public setdiagonalMenor(diagonalMenor:number){
        this.diagonalMenor = diagonalMenor
}

calcularArea(): number {
    return (this.diagonalMayor * this.diagonalMenor) / 2
}
calcularPerimetro(): number {
    const lado = Math.sqrt(
        Math.pow(this.diagonalMayor / 2, 2) + Math.pow(this.diagonalMenor / 2, 2)
    );
    return lado * 4;
}
}




