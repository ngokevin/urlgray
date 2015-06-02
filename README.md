urlgray
-------

Lightweight URL parsing and manipulation library.

For thosing looking for a small, simple library that simply takes a URL and a
JS object, and tacks on a querystring.

```
var Url = require('urlgray');

Url('http://localhost/')
    .q({foo: 'bar'})  // 'http://localhost/?foo=bar'
    .q('baz', 'qux')  // 'http://localhost/?foo=bar&baz=qux'
    .unQ(['foo', 'baz'])  // 'http://localhost/'
    .q({foo: ['bar', 'baz']})  // 'http://localhost/?foo=bar&foo=baz'
    .getQ()  //  {foo: ['bar', 'baz']}
```
