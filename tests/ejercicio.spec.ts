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
});
