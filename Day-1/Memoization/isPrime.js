
function isPrime(n){
	isPrime.result = isPrime.result || {
		0 : true,
		1 : true,
		2 : true,
		3 : true
	};
	if (typeof isPrime.result[n] !== "undefined"){
		console.log("returnin from cache...")
		return isPrime.result[n];
	}
	isPrime.result[n] = true;
	for(var i=2;i<=(n/2);i++)
		if (n%i===0) {
			isPrime.result[n] = false;
			break;
		}
	console.log("freshly brewed....");
	return isPrime.result[n];
}