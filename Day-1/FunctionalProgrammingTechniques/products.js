var products = [
	{id :1, name :"pen", units:90 ,cost:10, category:1},
	{id :7, name :"den", units:40 ,cost:70, category:2},
	{id :3, name :"ten", units:75 ,cost:30, category:1},
	{id :6, name :"len", units:30 ,cost:60, category:2},
	{id :4, name :"zen", units:10 ,cost:40, category:1},
	{id :9, name :"ken", units:80 ,cost:20, category:2}
]

/*
sort, filter, grouping, join, map, each, min, max, avg, countBy
*/

function sort(list){
	for(var i=0;i<list.length-1;i++)
		for(var j=i+1;j<list.length;j++){
			if (list[i].id > list[j].id){
				var temp = list[i];
				list[i] = list[j];
				list[j] = temp;
			}
		}
}

function sort(list,attr){
	for(var i=0;i<list.length-1;i++)
		for(var j=i+1;j<list.length;j++){
			if (list[i][attr]> list[j][attr]){
				var temp = list[i];
				list[i] = list[j];
				list[j] = temp;
			}
		}
}

function sort(list,attrSelector){
	for(var i=0;i<list.length-1;i++)
		for(var j=i+1;j<list.length;j++){
			if (attrSelector(list[i])> attrSelector(list[j])){
				var temp = list[i];
				list[i] = list[j];
				list[j] = temp;
			}
		}
}


function sort(list,attrSelector){
	if (typeof attrSelector === "string"){
		var attrName = attrSelector;
		attrSelector = function(item){
			return item[attrName];
		}
	}
	for(var i=0;i<list.length-1;i++)
		for(var j=i+1;j<list.length;j++){
			if (attrSelector(list[i])> attrSelector(list[j])){
				var temp = list[i];
				list[i] = list[j];
				list[j] = temp;
			}
		}
}


function filter(list,predicate){
	var result = [];
	for(var i=0;i<list.length;i++)
		if (predicate(list[i]))
			result.push(list[i]);
	return result;
}

function groupBy(list,keySelector /*string*/){
	if (typeof keySelector === "string"){
		var attrName = keySelector;
		keySelector = function(item){
			return item[attrName];
		}
	}
	var result = {};
	for(var i=0;i<list.length;i++){
		var key = keySelector(list[i]);
		if (typeof result[key] === "undefined")
			result[key] = [];
		result[key].push(list[i]);
	}
	return result;
}

var categories = [
	{id : 1, name : "stationary"},
	{id : 2, name : "grocery"}
]
/*
funtion join(leftList, rightList, whatever.....){

}

var productsWithCategoryName = join(products,categories,whatever.....)

productsWithCategoryName should be

[
	{id :1, name :"pen", units:90 ,cost:10, category:"stationary"},
	{id :7, name :"den", units:40 ,cost:70, category:"grocery"},
	{id :3, name :"ten", units:75 ,cost:30, category:"stationary"},
	{id :6, name :"len", units:30 ,cost:60, category:"grocery"},
	{id :4, name :"zen", units:10 ,cost:40, category:"stationary"},
	{id :9, name :"ken", units:80 ,cost:20, category:"grocery"}
]
*/

function map(list,mapper){
	var result = [];
	for(var i=0;i<list.length;i++)
		result.push(mapper(list[i]));
	return result;
}

function each(list,fn){
	for(var i=0;i<list.length;i++)
		fn(list[i]);
}