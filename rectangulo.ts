export class Rectangulo {
    private base:number
    private altura:number
    constructor(base:number, altura:number) {
        this.base = base
        this.altura = altura
        
    }
    public getBase(){
        return this.base
}
    public getAltura(){
        return this.altura
    }
    public setBase(base:number){
            this.base = base
}
    public setAltura(altura:number){
            this.altura = altura
}
    public calcularArea(){
        return this.base * this.altura
}
    
    public calcularPerimetron(){  
        return 2*(this.base + this.altura)
}
}

