Object.defineProperty(Function.prototype, 'promise', {
	get: function() {
		var origFunc = this;
		return function() {
			var result = origFunc.apply(this, arguments);
			return {
				then: function then(callback) {
					return callback.promise(result);
				},
				done: function done(callback) {
					return callback(result);
				}
			};
		};
	}
});