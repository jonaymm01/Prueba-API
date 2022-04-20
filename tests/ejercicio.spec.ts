import 'mocha';
import {expect} from 'chai';
import {MapAndReduce} from '../src/mapAndReduce';
import {AddMapReduce} from '../src/addMapReduce';
import {SubMapReduce} from '../src/subMapReduce';
import {ProdMapReduce} from '../src/prodMapReduce';
import {DivMapReduce} from '../src/divMapReduce';


describe('MapAndReduce', () => {
  it('Debe existir una clase plantilla para un algoritmo MapAndReduce', () => {
    expect(MapAndReduce).to.exist;
  });
});

describe('SubReduce', () => {
  it('Debe existir una clase plantilla para sumar', () => {
    expect(SubMapReduce).to.exist;
  });
  it('Funciona correctamente el algoritmo', () => {
    const array: number[] = [3, 3, 3];
    const algoritmo = new SubMapReduce(array);
    const s: number = algoritmo.run(3);
    expect(s).to.be.equal(0);
  });
});
