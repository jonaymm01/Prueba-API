/**
 * Clase RandomNumber
 */
export class RandomNumber {
  private static randomNumberInstance: RandomNumber;
  /**
   * Constructor clase RandomNumber
   */
  private constructor() {
  }
  /**
   * "Getter" de la única instancia de la clase singleton
   * @return {RandomNumber}
   */
  public static getRandomNumberInstance(): RandomNumber {
    if (!RandomNumber.randomNumberInstance) {
      RandomNumber.randomNumberInstance = new RandomNumber();
    }
    return RandomNumber.randomNumberInstance;
  }
  /**
   * Número aleatorio entre 0 y 1
   * @return {number}
   */
  zeroToOne(): number {
    return Math.random();
  }
  /**
   * Número flotante aleatorio entre un número min y otro max
   * @param {number} min
   * @param {number} max
   * @return {number}
   */
  minToMaxFloat(min: number, max: number): number {
    return Math.random() * (max - min) + min;
  }
  /**
   * Número entero aleatorio entre un número min y otro max
   * @param {number} min
   * @param {number} max
   * @return {number}
   */
  minToMaxInt(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min)) + min;
  }
}

/**
 * Clase NumberCollection
 */
export class NumberCollection implements Iterable<number> {
  private numeros: Set<number>;

  /**
   * Constructor de la clase NumberCollection
   * @param {number[]} numeros
   */
  constructor(numeros: number[]) {
    this.numeros = new Set(numeros);
  }

  /**
   * Función para añadir un número a la colección
   * @param {number} newNumber
   */
  addNumber(newNumber: number) {
    this.numeros.add(newNumber);
  }

  /**
   * Getter de la cantidad de números de la colección
   * @return {number}
   */
  getNumberOfNumbers(): number {
    return this.numeros.size;
  }

  /**
   * Propiedad symbol.iterator
   * @return {Iterator<number>}
   */
  [Symbol.iterator](): Iterator<number> {
    return this.numeros.values();
  }
}
