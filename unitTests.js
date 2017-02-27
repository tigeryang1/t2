var mocha = require('mocha');
var chai = require('chai');
var get = require('simple-get');

var expect = chai.expect;


describe('data fullfilling', () => {
  it('should return ford escape data', (done) => {
    get('http://localhost:8080/api?makeModel=FordEscape', function (err, res) {
      expect(res.statusCode).to.equal(200);
      done();
    });
  });
  it('should return ford edge data', (done) => {
    get('http://localhost:8080/api?makeModel=FordEdge', function (err, res) {
      expect(res.statusCode).to.equal(200);
      done();
    });
  });
  it('should return acura ILX data', (done) => {
    get('http://localhost:8080/api?makeModel=AcuraILX', function (err, res) {
      expect(res.statusCode).to.equal(200);
      done();
    });
  });
  it('should return acura MDX data', (done) => {
    get('http://localhost:8080/api?makeModel=AcuraMDX', function (err, res) {
      expect(res.statusCode).to.equal(200);
      done();
    });
  });
});
