describe('commonjs bridge', function () {

  it('should allow circular dependencies between modules', function () {

    window.__cjs_module__ = {};
    window.__cjs_module__.foo = function (require, module, exports) {
      var bar = require('bar');
      exports.text = 'foo' + bar.text;
    };
    window.__cjs_module__.bar = function (require, module, exports) {
      var foo = require('foo');
      exports.text = 'bar' + foo.text;
    };



  });
});