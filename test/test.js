/*!
 * engine-assemble <https://github.com/doowb/engine-assemble>
 *
 * Copyright (c) 2014-2015, Brian Woodward.
 * Licensed under the MIT License.
 */

'use strict';

var fs = require('fs');
var path = require('path');
var handlebars = require('..');
var assert = require('assert');

describe('.renderSync()', function () {
  it('should render templates.', function () {
    var str = handlebars.renderSync('Jon {{ name }}', {name: 'Schlinkert'});
    assert.equal(str, 'Jon Schlinkert');
  });
});


describe('.render()', function() {
  it('should render templates.', function(done) {
    var ctx = {name: 'Jon Schlinkert'};

    handlebars.render('{{ name }}', ctx, function (err, content) {
      assert.equal(content, 'Jon Schlinkert');
      done();
    });
  });

  it('should use default helpers.', function (done) {
    var ctx = {
      name: 'brian woodward'
    };
    handlebars.render('{{capitalizeEach name}}', ctx, function (err, content) {
      if (err) console.log(err);
      assert.equal(content, 'Brian Woodward');
      done();
    });
  });

  it('should use helpers passed on the options.', function(done) {
    var ctx = {
      name: 'Jon Schlinkert',
      helpers: {
        include: function(name) {
          var filepath = path.join('test/fixtures', name);
          return fs.readFileSync(filepath, 'utf8');
        },
        upper: function(str) {
          return str.toUpperCase();
        }
      }
    };

    handlebars.render('{{upper (include "content.hbs")}}', ctx, function (err, content) {
      if (err) console.log(err);

      assert.equal(content, 'JON SCHLINKERT');
      done();
    });
  });

  it('should use helpers on options over default helpers.', function (done) {
    var ctx = {
      name: 'brian woodward',
      helpers: {
        capitalizeEach: function (str) {
          return str.toUpperCase();
        }
      }
    };
    handlebars.render('{{capitalizeEach name}}', ctx, function (err, content) {
      if (err) console.log(err);
      assert.equal(content, 'BRIAN WOODWARD');
      done();
    });
  });

  it('should use partials passed on the options.', function(done) {
    var ctx = {
      partials: {
        a: 'foo',
        b: 'bar'
      }
    };

    handlebars.render('{{> a }}{{> b }}', ctx, function (err, content) {
      if (err) console.log(err);
      assert.equal(content, 'foobar');
      done();
    });
  });
});


describe('.renderFile()', function() {
  it('should render templates from a file.', function(done) {
    var ctx = {name: 'Jon Schlinkert'};

    handlebars.renderFile('test/fixtures/default.hbs', ctx, function (err, content) {
      assert.equal(content, 'Jon Schlinkert');
      done();
    });
  });
});
