define([
		'main',
		'component/models',
		'jquery'
], function(Constructor, models, $) {
	'use strict';
	$.fn[models.ComponentName] = function(options) {
		return Constructor.apply(Constructor, [this, options].concat(Array.prototype.splice.call(arguments, 1)));
	};

	for (var idx in models) {
		$.fn[models.ComponentName][idx] = models[idx];
	}

	return Constructor;
});