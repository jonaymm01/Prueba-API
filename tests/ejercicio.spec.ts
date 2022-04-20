import 'mocha';
import {expect} from 'chai';
import {MapAndReduce} from '../src/mapAndReduce';
import {SubMapReduce} from '../src/subMapReduce';
import {AddMapReduce} from '../src/addMapReduce';
import {ProdMapReduce} from '../src/prodMapReduce';
import {DivMapReduce} from '../src/divMapReduce';

describe('MapAndReduce', () => {
  it('Debe existir una clase plantilla para un algoritmo MapAndReduce', () => {
    expect(MapAndReduce).to.exist;
  });
});

describe('SubReduce', () => {
  it('Debe existir una clase plantilla para restar', () => {
    expect(SubMapReduce).to.exist;
  });
  it('Funciona correctamente el algoritmo', () => {
    const array: number[] = [3, 3, 3];
    const algoritmo = new SubMapReduce(array);
    const s: number = algoritmo.run(0);
    expect(s).to.be.equal(9);
  });
});

describe('AddReduce', () => {
  it('Debe existir una clase plantilla para sumar', () => {
    expect(AddMapReduce).to.exist;
  });
  it('Funciona correctamente el algoritmo', () => {
    const array: number[] = [3, 2, 1];
    const algoritmo = new AddMapReduce(array);
    const s: number = algoritmo.run(2);
    expect(s).to.be.equal(12);
  });
});

describe('ProdReduce', () => {
  it('Debe existir una clase plantilla para multiplicar', () => {
    expect(ProdMapReduce).to.exist;
  });
  it('Funciona correctamente el algoritmo', () => {
    const array: number[] = [3, 2, 1];
    const algoritmo = new ProdMapReduce(array);
    const s: number = algoritmo.run(2);
    expect(s).to.be.equal(12);
  });
});

describe('DivReduce', () => {
  it('Debe existir una clase plantilla para dividir', () => {
    expect(DivMapReduce).to.exist;
  });
  it('Funciona correctamente el algoritmo', () => {
    const array: number[] = [6, 4, 2];
    const algoritmo = new DivMapReduce(array);
    const s: number = algoritmo.run(2);
    expect(s).to.be.equal(6);
  });
});

