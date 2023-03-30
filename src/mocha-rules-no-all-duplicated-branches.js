it('should work', function (done) {
    fetchData(options, function (error, data) {
        expect(error).not.to.be.ok;
        expect(data).to.deep.equal({ foo: 'bar' });
        // done callback was not called
    });
});
