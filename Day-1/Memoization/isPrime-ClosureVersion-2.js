var isPrime = (function(){
	var result = {
		0 : true,
		1 : true,
		2 : true,
		3 : true
	};
	return function isPrime(n){
		if (typeof result[n] !== "undefined"){
			console.log("returnin from cache...")
			return result[n];
		}
		result[n] = true;
		for(var i=2;i<=(n/2);i++)
			if (n%i===0) {
				result[n] = false;
				break;
			}
		console.log("freshly brewed....");
		return result[n];
	}
})();
