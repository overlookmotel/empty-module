/* --------------------
 * {{name}} module
 * Tests ESLint config
 * ------------------*/

'use strict';

// Exports

module.exports = {
	extends: [
		'@overlookmotel/eslint-config-jest'
	],
	rules: {
		'import/no-unresolved': ['error', {ignore: ['^{{name}}$']}],
		'node/no-missing-require': ['error', {allowModules: ['{{name}}']}]
	}
};
