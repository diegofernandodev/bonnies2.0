import { Rectangulo } from "./rectangulo";

export class TrianguloRectangulo extends Rectangulo {
   
    constructor(base: number, altura: number) {
        super(base,altura)
    }

    public calcularArea(): number {
        return (this.getBase() * this.getAltura()) / 2;
    }

    public calcularPerimetro(): number {
        const hipotenusa = this.calcularHipotenusa();
        const perimetro = this.getBase() + this.getAltura() + hipotenusa;
        return perimetro;
    }
    public obtenerPerimetroConDosDecimales(): string {
        const perimetro = this.calcularPerimetro();
        return perimetro.toFixed(2);
    }

    public calcularHipotenusa(): number {
        return Math.sqrt(this.getBase() ** 2 + this.getAltura() ** 2);
    }

    public obtenerHipotenusaConDosDecimales(): string {
        const Hipotenusa = this.calcularHipotenusa();
        return Hipotenusa.toFixed(2);
    }

    public determinarTipoTriangulo(): string {
        const hipotenusa = this.calcularHipotenusa();

        if (this.getBase() === this.getAltura() && this.getBase() === hipotenusa) {
            return "Triángulo equilátero (todos los lados iguales)";
        } else if (this.getBase() === this.getAltura() || this.getBase() === hipotenusa || this.getAltura() === hipotenusa) {
            return "Triángulo isósceles (dos lados iguales)";
        } else {
            return "Triángulo escaleno (todos los lados diferentes)";
        }
    }
}


