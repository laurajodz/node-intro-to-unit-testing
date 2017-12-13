const should = require('chai').should();

const fizzBuzzer = require('../fizzBuzzer');

// unit tests for our function
describe('fizzBuzzer', function() {

  // test the normal cases
  it('should return \'fizz-buzz\' for multiples of 15', function() {
    // normal inputs
    const normalCases = [15, 75, 300];
    normalCases.forEach(function(input) {
      fizzBuzzer(input).should.equal('fizz-buzz');
    });
  });

  it('should return \'buzz\' for multiples of 5', function() {
    // normal inputs
    const normalCases = [5, 50, 500];
    normalCases.forEach(function(input) {
      fizzBuzzer(input).should.equal('buzz');
    });
  });

  it('should return \'fizz\' for multiples of 3', function() {
    // normal inputs
    const normalCases = [3, 12, 21];
    normalCases.forEach(function(input) {
      fizzBuzzer(input).should.equal('fizz');
    });
  });

  it('should return the number for everything else', function() {
    // normal inputs
    const normalCases = [2, 4, 533];
    normalCases.forEach(function(input) {
      fizzBuzzer(input).should.equal(input);
    });
  });

  it('should raise error if input is not a number', function() {
    // range of bad inputs where not both are numbers
    const badInputs = ['a','1',false];
    // prove that an error is raised for bad inputs
    badInputs.forEach(function(input) {
      (function() {
          fizzBuzzer(input)
      }).should.throw(Error);
    });
  });
});
