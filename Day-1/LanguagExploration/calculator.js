function add(){
	function parseArg(n){
		if (typeof n === "function") return parseArg(n());
		if (n instanceof Array) return add.apply(this,n);
		return !isNaN(n) ? parseInt(n,10) : 0;
	}
	return arguments.length <= 1 ? parseArg(arguments[0]) : parseArg(arguments[0]) + add([].slice.call(arguments,1));
}