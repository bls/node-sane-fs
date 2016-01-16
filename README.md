# @sane/fs

Promisified 'fs' API, for typescript.

Just import it and use it like the regular 'fs' module.

Install
-------

```bash
npm install @sane/fs --save
```

Example
-------

```javascript
import * as fs from '@sane/fs';

fs.unlinkAsync('/tmp/foo')
    .then(() => {
        // ...
    });
```

Release
-------

1. Bump up the version number in package.json
1. Add a section for the new release in CHANGELOG.md
1. Run npm run-script compile to ensure it builds
1. Commit
1. Run npm publish
1. Create a git tag for the new release and push it
