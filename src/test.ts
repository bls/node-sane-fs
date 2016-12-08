import * as fs from './index';

describe('fs', function() {
    describe('unlink', function() {
        it('should do maybe unlink stuff', async function() {
            await writeFileAsync('/tmp/foo', 'something');
            await fs.unlinkAsync('/tmp/foo');
        });
    });
});
