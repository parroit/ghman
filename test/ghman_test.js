/*
 * ghman
 * https://github.com/astream/ghman
 *
 * Copyright (c) 2014 Andrea Parodi
 * Licensed under the MIT license.
 */

'use strict';

var chai = require('chai');
chai.expect();
chai.should();

var ghman = require('../lib/ghman.js');

describe('ghman', function(){
    it('is defined', function(){
      ghman.should.be.a('function');
    });

});
