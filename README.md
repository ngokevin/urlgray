urlgray
-------

Lightweight URL parsing and manipulation library.

I'll have an urlgray, 800B min+gzip, hold the sugar.

```js
var Url = require('urlgray');

Url('http://localhost/')
    .q({foo: 'bar'})  // 'http://localhost/?foo=bar'
    .q('baz', 'qux')  // 'http://localhost/?foo=bar&baz=qux'
    .unQ(['foo', 'baz'])  // 'http://localhost/'
    .q({foo: ['bar', 'baz']})  // 'http://localhost/?foo=bar&foo=baz'
    .query  //  {foo: ['bar', 'baz']}
```

Published on Bower and NPM. Supports UMD format (which includes AMD, CommonJS,
and browser globals).
