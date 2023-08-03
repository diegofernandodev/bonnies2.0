class Trapecio {
    private baseMayor:number
    private baseMenor:number
    private alturaMayor:number
    private alturaMenor:number
    constructor(baseMayor: number, baseMenor: number, alturaMayor: number,  alturaMenor: number) {
        this.baseMayor = baseMayor
        this.baseMenor = baseMenor
        this.alturaMayor = alturaMayor
        this.alturaMenor = alturaMenor
    }

    setBaseMayor(baseMayor: number):void {
        this.baseMayor = baseMayor
    }
    setBaseMenor(baseMenor: number):void {
        this.alturaMenor = baseMenor
    }
    setAlturaMayor(alturaMayor: number):void {
        this.alturaMenor = alturaMayor
    }
    setAlturaMenor(alturaMenor: number):void {
        this.alturaMenor = alturaMenor
    }

    getBaseMayor():number{
        return this.baseMayor
    }
    getBaseMenor():number{
        return this.baseMenor
    }
    getAlturaMayor(){
        return this.alturaMayor
    }
    getAlturaMenor(){
        return this.alturaMenor
    }

    public calcularArea(): number {
        const altura = this.alturaMayor - this.alturaMenor;
        const area = ((this.baseMayor + this.baseMenor) * altura) / 2;
        return area;
    }

    public calcularPerimetro(): number {
        const lado1 = this.baseMayor;
        const lado2 = this.baseMenor;
        const lado3 = this.alturaMayor;
        const lado4 = this.alturaMenor;
        const perimetro = lado1 + lado2 + lado3 + lado4;
        return perimetro;
    }
}