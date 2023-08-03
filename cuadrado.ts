export class Cuadrado {
    private lado: number
    constructor(lado:number) {
        this.lado=lado        
    }
   public getlado(){
    return this.lado
   } 

   public setlado(lado:number){
    this.lado=lado
   }


   calculararea():number{
    return this.lado*this.lado
   }

   calcularperimetro():number{
    return this.lado*4
   }
   //mostrardatos():  void{
     //  console.log(`el area del cuadrado es: ${this.calculararea()}`);
     // console.log(`el perimetro del cuadrado es: ${this.calcularperimetro()}`);

  // }
}


let cuadrado1:Cuadrado = new Cuadrado(5)
console.log("el area de cuadrado es:", cuadrado1.calculararea());
console.log("el perimetro del cuadrado es:", cuadrado1.calcularperimetro());

//cuadrado1.mostrardatos()



