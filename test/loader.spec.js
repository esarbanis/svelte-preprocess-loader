/* global describe, it */
const chai = require('chai');
const sinonChai = require('sinon-chai');
const { spy } = require('sinon');
const { readFileSync } = require('fs');
const loader = require('../');

chai.use(sinonChai);
const { expect } = chai;

describe('loader', () => {
	it('should preprocess successfully', (done) => {
		function callback(err, code, map) {
			expect(err).not.to.exist;
			expect(code).to.exist;
			expect(code).
          to.
          eql('<button>+1</button>\n​\n<style>\n  button {\n    width: 50px;\n    height: 50px;\n  }\n</style>\n');
			expect(map).not.to.exist;
		}

		function cb() {
			callback(...[].slice.call(arguments));
			expect(callbackSpy).to.have.been.called;
			done();
		}

		const fileContents = readFileSync('test/fixtures/style-valid.html',
        'utf-8');
		const cacheableSpy = spy(() => {
		});
		const callbackSpy = spy(cb);
		const options = {
			style: ({ content }) => {
				return {
					code: content.replace(/\$size/gi, '50px'),
				};
			},
		};

		loader.call(
			{
				cacheable: cacheableSpy,
				async: () => callbackSpy,
				options,
			},
        fileContents,
        null
    );

		expect(cacheableSpy).to.have.been.called;
	});

	it('should not preprocess successfully', () => {
		const fileContents = readFileSync('test/fixtures/style-valid.html', 'utf-8');
		const cacheableSpy = spy(() => {
		});
		const options = {
			style: () => {
				throw new Error('Error while preprocessing');
			},
		};

		loader.call(
			{
				cacheable: cacheableSpy,
				async: () => (err) => {
					expect(err).to.exist;
				},
				options,
			},
        fileContents,
        null
    );

	});
});