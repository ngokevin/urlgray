var assert = require('assert');

var Url = require('./index');


describe('constructor', function() {
    it('creates Urlgrey object', function() {
        var url = new Url('http://localhost');
        assert.equal(url.url, 'http://localhost');
    });
});


describe('_getBase', function() {
    it('gets base', function() {
        assert.equal(Url._getBase('http://localhost/?foo=bar'),
                     'http://localhost/');
    });
});


describe('_getQueryString', function() {
    it('gets querystring', function() {
        assert.equal(Url._getQueryString('http://localhost/?foo=bar'),
                     'foo=bar');
    });

    it('gets empty querystring', function() {
        assert.equal(Url._getQueryString('http://localhost/'),
                     '');
    });
});


describe('_parseQuery', function() {
    it('parses query', function() {
        assert.deepEqual(Url._parseQuery('http://localhost/?foo=bar&qux=qaz'),
                         {foo: 'bar', qux: 'qaz'});
    });

    it('parses empty query', function() {
        assert.deepEqual(Url._parseQuery('http://localhost/'),
                         {});
    });
});
