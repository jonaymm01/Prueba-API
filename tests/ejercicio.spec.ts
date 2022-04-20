import 'mocha';
import {expect} from 'chai';
import {MapAndReduce} from '../src/mapAndReduce';
import {AddMapReduce} from '../src/addMapReduce';

describe('MapAndReduce', () => {
  it('Debe existir una clase plantilla para un algoritmo MapAndReduce', () => {
    expect(MapAndReduce).to.exist;
  });
});

describe('AddReduce', () => {
  it('Debe existir una clase plantilla para sumar', () => {
    expect(AddMapReduce).to.exist;
  });
  it('Funciona correctamente el algoritmo', () => {
    const array: number[] = [1, 2, 3];
    const algoritmo = new AddMapReduce(array);
    const s: number = algoritmo.run(3);
    expect(s).to.be.equal(12);
  });
});
