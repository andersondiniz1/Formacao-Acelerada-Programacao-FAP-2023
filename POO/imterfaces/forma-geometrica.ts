interface FormaGeometrica {
  calcularArea(): number;
  calcularPerimetro(): number;
}

class Circulo implements FormaGeometrica {
  constructor(public raio: number) {}

  calcularArea() {
    return Math.PI * this.raio ** 2;
  }

  calcularPerimetro() {
    return 2 * Math.PI * this.raio;
  }
}

class Retangulo implements FormaGeometrica {
  constructor(public largura: number, public altura: number) {}

  calcularArea() {
    return this.largura * this.altura;
  }

  calcularPerimetro() {
    return 2 * (this.largura + this.altura);
  }
}

function main() {
  const circulo = new Circulo(5);
  const retangulo = new Retangulo(4, 6);

  console.log(`Área do círculo: ${circulo.calcularArea()}`);
  console.log(`Perímetro do círculo: ${circulo.calcularPerimetro()}`);

  console.log(`Área do retângulo: ${retangulo.calcularArea()}`);
  console.log(`Perímetro do retângulo: ${retangulo.calcularPerimetro()}`);
}

main();
