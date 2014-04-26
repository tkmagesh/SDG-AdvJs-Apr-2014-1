function test(title,testFn){
		var testResult = testFn();
		$("<li>")
			.html(title)
			.addClass(testResult ? "pass" : "fail")
			.appendTo("#ulSpecs");
	}