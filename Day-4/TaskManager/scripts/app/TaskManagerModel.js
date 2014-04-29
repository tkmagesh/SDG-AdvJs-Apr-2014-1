define(['app/TaskModel'],function(TaskModel){
	return function TaskManagerModel(){
		this.list = [];
		this.addTask = function(taskName){
			var newTask = new TaskModel(taskName);
			this.list.push(newTask);
			this.triggerChange("add",newTask);
		}
		this.removeCompleted = function(){
			for(var i=this.list.length-1; i>=0; i--){
				var task = this.list[i];
				if (task.isCompleted())
					task.remove();
				this.list.splice(i,0);
			};
		}
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
		}
	}
});