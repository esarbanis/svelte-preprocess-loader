const { preprocess } = require('svelte');
const { getOptions } = require('loader-utils');

module.exports = function(content, map, meta) {
	this.cacheable();
	const callback = this.async();

	const options = Object.assign({}, this.options, getOptions(this));

	preprocess(content, options).then(processed => {
		callback(null, processed.toString(), map, meta);
	}, err => callback(err)).catch(err => callback(err));
};
