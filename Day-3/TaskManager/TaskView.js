define(['TaskModel','jquery'],function(TaskModel,$){
	return function TaskView(model){
		var _model = model;
		this.$root = $("<li>");
		var that = this;
		this.init = function(){
			//Model Events
			_model.addOnChange("taskName", function(taskName){
				that.$root.html(taskName)
			});
			_model.addOnChange("isCompleted", function(isCompleted){
				if (isCompleted){
					that.$root.addClass("completed");
				} else {
					that.$root.removeClass("completed");
				}
			});
			_model.addOnChange("remove", function(){
				that.$root.remove();
			});

			//View Events
			this.$root.click(function(){
				_model.toggleCompletion();
			});
		};
		this.render = function(){
			this.$root.html(_model.taskName()).addClass(_model.isCompleted() ? "completed" : "");
			return this;
		}
	}
});