import {MapAndReduce} from './mapAndReduce';

/**
 * Clase para restar en el map
 */
export class SubMapReduce extends MapAndReduce {
  /**
   * Constructor de SubMapReduce
   * @param {number} array
   */
  constructor(array: number[]) {
    super(array);
  };

  /**
   * @param {number} a
   * @param {number} n
   * @return {number}
   */
  protected funcion(a: number, n: number): number {
    return a - n;
  }

  /**
   * Función para realizar el sucedáneo de reduce() sobre el array
   * @param {number[]} array
   * @return {number}
   */
  protected reduceArray(array: number[]): number {
    let solucion: number = 0;
    array.forEach((a) => {
      solucion += a;
    });
    return solucion;
  }
}
