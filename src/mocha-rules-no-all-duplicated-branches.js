it('should work', function (done) {
    fetchData(options, function (error, data) {
        expect(error).not.to.be.ok;
    });
});
