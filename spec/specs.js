describe('Triangle', function() {
  describe('kind', function() { 
    it('will tell you if a triangle is Equilateral', function() {
      var sampleTriangle = Object.create(Triangle);
      sampleTriangle.firstSide = '4';
      sampleTriangle.secondSide = '4';
      sampleTriangle.thirdSide = '4';
      sampleTriangle.kind().should.equal('Equilateral');
    });
    it('will tell you if a triangle is Isosceles', function() {
      var sampleTriangle = Object.create(Triangle);
      sampleTriangle.firstSide = '4';
      sampleTriangle.secondSide = '4';
      sampleTriangle.thirdSide = '3';
      sampleTriangle.kind().should.equal('Isosceles');
    });
    it('will tell you if a triangle is Scalene', function() {
      var sampleTriangle = Object.create(Triangle);
      sampleTriangle.firstSide = '5';
      sampleTriangle.secondSide = '4';
      sampleTriangle.thirdSide = '3';
      sampleTriangle.kind().should.equal('Scalene');
    });
  });
  describe('invalid', function() {
      it('will tell you if a triangle is not a triangle', function() {
      var sampleTriangle = Object.create(Triangle);
      sampleTriangle.firstSide = '10';
      sampleTriangle.secondSide = '4';
      sampleTriangle.thirdSide = '4';
      sampleTriangle.invalid().should.equal(true);
    });
  });
});
