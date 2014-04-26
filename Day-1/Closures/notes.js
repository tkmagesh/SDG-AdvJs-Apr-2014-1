//create a spinner object
behavior:
spinner.up() => 1
spinner.up() => 2
spinner.up() => 3
spinner.up() => 4
spinner.up() => 5

spinner.down() => 4
spinner.down() => 3
spinner.down() => 2
spinner.down() => 1
spinner.down() => 0
spinner.down() => -1


function getSpinner(){
	var value = 0;
	var spinner = {
		up : function(){
			return ++value;
		},
		down : function(){
			return --value;
		}
	}
	return spinner;	
}


create a function that returns an employee object

var emp = getEmployee(id,name,salary)

"id" -> readonly
"name" -> cannot be assigned a empty string
"salary" -> cannot be assigned a value less than the current salary

function getEmployee(id,name,salary){
	var _id = id,
		_name = name,
		_salary = salary;
	return {
		id : function(){
			return _id
		},
		name : function(val){
			if (typeof val === "undefined") return _name;
			if (val !== "") _name = val;
		},
		salary : function(val){
			if (typeof val === "undefined") return _salary;
			if (val > _salary) _salary = val;
		}
	}
}