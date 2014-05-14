var testFunc = function a(a, b, c) { return a+b+c; };
testFunc.promise = 'abc';
var testFuncPromise = testFunc.promise(1,1,2)
	.then(function c(result) {
		result += 1;
		console.log(result);
		return result;
	})
	.then(function c(result) {
		result -= 1;
		console.log(result);
		return result;
	})
	.done(function c(result) {
		result -= 1;
		console.log(result);
		return result;
	})
;
console.log('testFuncPromise: ' + testFuncPromise);

/* Outputs:
 * 5
 * 4
 * 3
 * testFuncPromise: 3
 */