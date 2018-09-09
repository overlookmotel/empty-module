/* --------------------
 * {{name}} module
 * Tests
 * ------------------*/

'use strict';

// Modules
const chai = require('chai'),
	{expect} = chai,
	{{nameCamel}} = require('../lib/');

// Init
chai.config.includeStack = true;

// Tests

describe('Tests', function() {
	it.skip('all', function() {
		expect({{nameCamel}}).to.be.ok;
	});
});
