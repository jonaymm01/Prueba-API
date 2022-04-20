/**
 * Clase plantilla de un algoritmo MapAndReduce
 * sobre un array numérico
 */
export abstract class MapAndReduce {
  /**
   * Constructor
   * @param {number[]} array
   */
  constructor(protected array: number[]) {}

  /**
   * Método plantilla que define al algoritmo MapAndReduce
   * @param {number} n
   * @return {number}
   */
  public run(n: number): number {
    const arrayMapeada: number[] = this.mapArray(n, this.funcion);
    const valor: number = this.reduceArray(arrayMapeada);
    return valor;
  }

  /**
   * @param {number} a
   * @param {number} n
   * @return {number}
   */
  protected abstract funcion(a: number, n: number): number;

  /**
   * @param {number} n
   * @param {function} callback
   * @return {number[]}
   */
  protected mapArray(n: number, callback: (a: number, n: number) => number): number[] {
    const solucion: number[] = [];
    this.array.forEach((a) => {
      solucion.push(callback(a, n));
    });
    return solucion;
  }

  /**
   * Función para realizar el sucedáneo de reduce() sobre el array
   * @param {number[]} array
   *
   */
  protected abstract reduceArray(array: number[]): number;

  /**
   * Función opcional para rotar el array
   */
  protected rotateArray() {};

  /**
   * Función opcional para duplicar el array
   */
  protected duplicateArray() {};
}
