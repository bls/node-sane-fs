# @sane/fs

Promisified 'fs' API, for TypeScript.

Just import it and use it like the regular 'fs' module.

Install
-------

```bash
npm install @sane/fs --save
```

Api
---

If `foo` gives you a callback, `fooAsync` will give you a promise. See [src/index.ts](src/index.ts)
for a list of promisifed methods.

Example
-------

```javascript
import * as fs from '@sane/fs';

await fs.unlinkAsync('/tmp/foo');
```


Compatibility
-------------

* Requires Node >= v4.0.0

Release
-------

1. Bump up the version number in package.json
1. Add a section for the new release in CHANGELOG.md
1. Run npm run prepublish to ensure it builds
1. Commit
1. Run npm publish
1. Create a git tag for the new release and push it
