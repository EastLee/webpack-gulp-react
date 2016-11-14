(function(o) {
    var t = {};
    function r(n) {
        if (t[n]) return t[n].exports;
        var e = t[n] = {
            exports: {},
            id: n,
            loaded: false
        };
        o[n].call(e.exports, e, e.exports, r);
        e.loaded = true;
        return e.exports;
    }
    r.m = o;
    r.c = t;
    r.p = "";
    return r(0);
})([ function(o, exports) {
    alert(1);
    function t() {
        console.log(11);
    }
    t.prototype = {
        constructor: t,
        "1": function() {},
        "2": function() {}
    };
} ]);