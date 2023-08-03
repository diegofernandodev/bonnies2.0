class trianguloRectangulo {
    private base:number
    private altura:number
    constructor(base:number, altura:number) {
        this.base = base
        this.altura = altura
    }
    public calcularArea():number {
        return (this.base * this.altura) /2
}
public calcularPerimetro():number {
   const hipotenusa = Math.sqrt(this.base ** 2 + this.altura ** 2);
   const perimetro = this.base + this.altura + hipotenusa;
   return perimetro;
}
public setBase(base:number):void {
    this.base = base
}
public setAltura(altura:number):void {
    this.altura = altura
}
public getBase():number {
    return this.base
}
public getAltura():number {
    return this.altura
}
}

let trianguloRectangulo1 = new trianguloRectangulo(10,20)
console.log(trianguloRectangulo1.calcularArea(),trianguloRectangulo1.calcularPerimetro());
