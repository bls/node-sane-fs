///<reference path='typings/tsd.d.ts'/>

// import { expect } from 'chai';
import * as fs from './index';

describe('fs', () => {
    describe('unlink', () => {
        it('should do maybe unlink stuff', (done) => {
            fs.writeFileSync('/tmp/foo', 'blah');
            fs.unlinkAsync('/tmp/foo').then(() => done()).catch(done);
        });
    });
});
