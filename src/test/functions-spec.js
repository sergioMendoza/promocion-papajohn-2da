'use strict';
var expect = require('chai').expect;
var functions = require('../js/app.js');
describe('getSize()', function () {
  it('debería devolver un valor', () => {
    var expected = 'Grande';
    var actual = functions.getValueRadio('tipo');
    expect(actual).to.eql(expected);
  });
});
