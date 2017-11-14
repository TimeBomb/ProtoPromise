function ProtectedObj() {
	this._privateStuff = 'hide me';
	this.myMethod = () => {
		return `${this._privateStuff}... never mind`;
	};

	return new Proxy(this, {
		get: (target, prop, receiver) => {
			let functionCallerName = arguments.callee && arguments.callee.caller ? arguments.callee.caller.name : null;
			if (prop.charAt(0) === '_' && functionCallerName !== 'ProtectedObj') {
				throw new Error(`Can not retrieve private property: ${prop} of ProtectedObj`);
			}

			return this[prop];
		}
	});
}

var protectedObj = new ProtectedObj();
console.log('works', protectedObj.myMethod());
console.log('throws error', protectedObj._privateStuff);