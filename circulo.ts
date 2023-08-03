import { Cuadrado } from "./cuadrado";

export class Circulo extends Cuadrado {
   

private radio: number;



constructor (radio: number){
  super(0);
  this.radio = radio;
}

public calcularAreaCirculo(): number {
    return Math.PI * Math.pow(this.radio, 2);
  }

  public obtenerAreaConDosDecimales(): string {
    const area = this.calcularAreaCirculo();
    return area.toFixed(2);
}

  public calcularPerimetroCirculo(): number {
    return 2 * Math.PI * this.radio;
  }

  public obtenerPerimetroConDosDecimales(): string {
    const perimetro = this.calcularPerimetroCirculo();
    return perimetro.toFixed(2);
}

       
    
    public getradio(): number {
        return this.radio;
    }
    
    public setradio(value: number) {
           this.radio=value;
        
    }

}
//let circulo1: Circulo = new Circulo (5)


//console.log("Área del círculo:", circulo1.calcularAreaCirculo() );

//console.log("Perímetro del círculo:",circulo1.calcularPerimetroCirculo());

