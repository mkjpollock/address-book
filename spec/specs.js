describe('Contact', function() {
  describe('fullName', function() {
    it('combines the first and last names, with a space in between', function() {
      var sampleContact = Object.create(Contact);
      sampleContact.firstName = 'Tom';
      sampleContact.lastName = 'Waits';
      sampleContact.fullName().should.equal('Tom Waits');
    });
  });
});
