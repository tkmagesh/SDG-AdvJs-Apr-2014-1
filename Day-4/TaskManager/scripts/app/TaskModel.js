define([],function(){
	return function TaskModel(taskName){
		var onChangeCallbacks = {};
		this.addOnChange = function(attrName,callback){
			if (typeof onChangeCallbacks[attrName] === "undefined")
				onChangeCallbacks[attrName] = [];
			onChangeCallbacks[attrName].push(callback);				
		};

		this.triggerChange = function(attrName){
			var callbacks = onChangeCallbacks[attrName] || [];
			var that = this;
			for(var i=0;i<callbacks.length;i++){
				var callback = callbacks[i];

				setTimeout((function(index,args){
					 return function(){
   						callbacks[index].apply(that,Array.prototype.slice.call(args,1));
					 }
				})(i,arguments));
			}
		};

		var _taskName = taskName,
			_isCompleted = false;
		this.taskName = function(val){
			if (typeof val === "undefined") return _taskName;
			_taskName = val;
			this.triggerChange("taskName", _taskName);
		};
		this.isCompleted = function(){
			return _isCompleted;
		};
		this.toggleCompletion = function(){
			_isCompleted = !_isCompleted;
			this.triggerChange("isCompleted",_isCompleted);
		};
		this.remove = function(){
			this.triggerChange("remove");	
		};
		this.toJSON = function(){
			return {taskName : this.taskName(), isCompleted : this.isCompleted()};
		}
	};
});