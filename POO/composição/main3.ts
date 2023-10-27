/* 
  Neste exemplo, usaremos uma interface Engine e uma classe Car que possui uma relação de composição com a interface Engine. O carro é composto por um motor.
  
  A classe Car é composta por um objeto que implementa a interface Engine (no caso, GasolineEngine). A existência do carro está diretamente relacionada à existência do motor a gasolina, demonstrando uma relação de composição.
*/

export interface Engine {
  start(): void;
  stop(): void;
}

export class Car {
  private engine: Engine;

  constructor(engine: Engine) {
    this.engine = engine;
  }

  startCar() {
    this.engine.start();
  }

  stopCar() {
    this.engine.stop();
  }
}

export class GasolineEngine implements Engine {
  start(): void {
    console.log(`Motor a gasolina ligado.`);
  }

  stop(): void {
    console.log(`Motor a gasolina desligado.`);
  }
}

export class AlcoholEngine implements Engine {
  start(): void {
    console.log(`Motor a álcool ligado.`);
  }

  stop(): void {
    console.log(`Motor a álcool desligado.`);
  }
}

export class DieselEngine implements Engine {
  start(): void {
    console.log(`Motor a diesel ligado.`);
  }

  stop(): void {
    console.log(`Motor a diesel desligado.`);
  }
}

function main() {
  const myCar = new Car(new GasolineEngine());
  myCar.startCar();
  myCar.stopCar();

  const myCar2 = new Car(new AlcoholEngine());
  myCar2.startCar();
  myCar2.stopCar();

  const myCar3 = new Car(new DieselEngine());
  myCar3.startCar();
  myCar3.stopCar();
}

main();
