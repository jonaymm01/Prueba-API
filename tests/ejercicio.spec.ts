import 'mocha';
import {expect} from 'chai';
import {addNumber} from '../src/ejercicio';

describe('RandomNumber', () => {
  it('Debe existir una función para sumar dos números', () => {
    expect(addNumber).to.exist;
  });
  it('2 + 2 debe devolver 4', () => {
    expect(addNumber(2, 2)).to.be.equal(4);
  });
  it('4 + 6 debe devolver 10', () => {
    expect(addNumber(4, 6)).to.be.equal(10);
  });
  it('6 + 9 debe devolver 15', () => {
    expect(addNumber(6, 9)).to.be.equal(15);
  });
  it('6 + 9 debe devolver 15', () => {
    expect(addNumber(6, 9)).to.be.greaterThan(4);
  });
});
