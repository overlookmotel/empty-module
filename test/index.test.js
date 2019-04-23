/* --------------------
 * {{name}} module
 * Tests
 * ------------------*/

'use strict';

// Modules
const {{nameCamel}} = require('../index');

// Init
require('./utils');

// Tests

describe('tests', () => {
	it.skip('all', () => { // eslint-disable-line jest/no-disabled-tests
		expect({{nameCamel}}).not.toBeUndefined();
	});
});