export class Circulo {
   

private radio: number;



constructor (radio: number){
  this.radio = radio;
}

public calcularAreaCirculo(): number {
    return Math.PI * Math.pow(this.radio, 2);
  }

  public calcularPerimetroCirculo(): number {
    return 2 * Math.PI * this.radio;
  }

       
    
    public getradio(): number {
        return this.radio;
    }
    
    public setradio(value: number) {
           this.radio=value;
        
    }

}
let circulo1: Circulo = new Circulo (5)


//console.log("Área del círculo:", circulo1.calcularAreaCirculo() );

//console.log("Perímetro del círculo:",circulo1.calcularPerimetroCirculo());

