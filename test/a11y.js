/* global describe, it, axe, document */

describe('axe', function () {
	'use strict';

	it('should report that good HTML is good', function (done) {
		var n = document.getElementById('taco-button');
		axe.a11yCheck(n, {}, function (result) {
      result.violations.length.should.equal(0)
			done();
		});
	});

	it('should report that bad HTML is bad', function (done) {
		var n = document.getElementById('broken');
		axe.run(n, {}, function (error, result) {
      result.violations.length.should.equal(1)
			done();
		});
	});
});
