(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], factory);
    } else if (typeof exports === 'object') {
        module.exports = factory();
    } else {
        root.returnExports = factory();
  }
}(this, function () {
    'use strict';
    function Urlgrey(url) {
        this.url = url;

        this.q = function(arg1, arg2) {
            // Set query parameter(s).
            if (this.arguments.length === 1) {
                // Parameter is an object containing key-values.
                Object.keys(arg1).forEach(function(key) {
                    return _setQuery(this.url, key, arg1[key]);
                });
            } else if (this.arguments.length === 2) {
                // Parameters are a key and a value.
                return _setQuery(this.url, arg1, arg2);
            }
        };

        this.getQ = function() {
            return _parseQuery(this.url);
        };
    }

    function _decodeURIComponent(url) {
        return decodeURIComponent(url.replace(/\+/g, ' '));
    }

    function _encodeURIComponent(url) {
        return encodeURIComponent(url).replace(/%20/g, '+');
    }

    function _getBase(url) {
        // Returns base portion of url.
        return url.split('?')[0];
    }

    function _getQueryString(url) {
        // Returns querystring portion of url (as string).
        var qPos = url.indexOf('?');
        if (qPos === -1) {
            return '';
        }
        return url.substr(qPos + 1);
    }

    function _parseQuery(url) {
        // Get params as an object from url.
        // If url is not defined, gets from window.search.
        var qs;
        if (!url) {
            qs = location.search;
        } else {
            qs = _getQueryString(url);
        }

        if (qs[0] === '?') {
            // Strip leading ? if necessary.
            qs = qs.substring[1];
        }

        // Parse.
        var query = {};
        qs  // a=b&c=d
            .split('&')  // ['a=b, c=d'].
            .map(function(q) {
                return q.split('=').map(_decodeURIComponent);
            })  // [['a', 'b'], ['c', 'd']].
            .filter(function(p) {
                // Remove undefined.
                return !!p[0] && !!p[1];
            })
            .forEach(function(q) {
                query[q[0]] = q[1];  // To object.
            });

        return query;
    }

    function _setQuery(url, key, val) {
        // Set query on url.
    }

    Urlgrey._getBase= _getBase;
    Urlgrey._getQueryString= _getQueryString;
    Urlgrey._setQuery = _setQuery;
    Urlgrey._parseQuery = _parseQuery;

    return Urlgrey;
}));
