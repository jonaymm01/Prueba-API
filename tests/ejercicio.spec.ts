import 'mocha';
import {expect} from 'chai';
import {RandomNumber} from '../src/ejercicio';
import {NumberCollection} from '../src/ejercicio';


describe('RandomNumber', () => {
  it('Debe existir una clase RandomNumber', () => {
    expect(RandomNumber).to.exist;
  });
  const numero1 = RandomNumber.getRandomNumberInstance();
  const numero2 = RandomNumber.getRandomNumberInstance();
  it('Es una clase singleton', () => {
    expect(numero1).to.deep.equal(numero2);
  });
  it('zeroToOne() genera un numero entre 0 y 1', () => {
    expect(numero1.zeroToOne()).to.be.greaterThan(0);
    expect(numero1.zeroToOne()).to.be.lessThan(1);
  });
  it('minToMaxFloat(min, max) genera un numero entre min y max', () => {
    expect(numero1.minToMaxFloat(3, 8)).to.be.greaterThanOrEqual(3);
    expect(numero1.minToMaxFloat(3, 8)).to.be.lessThanOrEqual(8);
  });
  it('minToMaxInt(min, max) genera un numero entre min y max', () => {
    expect(numero1.minToMaxInt(3, 8)).to.be.greaterThanOrEqual(3);
    expect(numero1.minToMaxInt(3, 8)).to.be.lessThanOrEqual(8);
  });
});

describe('NumberCollection', () => {
  it('Debe existir una clase NumberCollection', () => {
    expect(NumberCollection).to.exist;
  });
  const numero = RandomNumber.getRandomNumberInstance();
  const collection = new NumberCollection([numero.zeroToOne(), numero.minToMaxFloat(2, 4), numero.zeroToOne()]);
  it('La colección tiene tres números', () => {
    expect(collection.getNumberOfNumbers()).to.be.equal(3);
  });
  it('Se puede añadir un número a la colección', () => {
    collection.addNumber(numero.zeroToOne());
    expect(collection.getNumberOfNumbers()).to.be.equal(4);
  });
});
