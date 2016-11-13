let fs = require(./index');

describe('fs', function() {
    describe('unlink', function() {
        it('should do maybe unlink stuff', function(done) {
            fs.writeFileAsync('/tmp/foo', 'something').then(function() {
                return fs.unlinkAsync('/tmp/foo');
            }).then(function() {
                done();
            }).catch(done);
        });
    });
});
