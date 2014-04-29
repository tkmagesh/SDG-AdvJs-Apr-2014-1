define(['app/TaskManagerModel','app/TaskView','jquery','text!templates/TaskManagerTemplate.html'],function(TaskManagerModel, TaskView, $, template){
	console.log("TaskManagerTemplate is ", template);
	return function TaskManagerView(model){
		this.$root = $("<div>");
		var //_templateId = "#TaskManagerTemplate",
			_model = model,
			that = this;

		this.init = function(){
			//Model Events
			_model.addOnChange("add",function(task){
				var newTaskView = new TaskView(task,"#taskTemplate");
				newTaskView.init();
				newTaskView.render().$root.appendTo(that.$root.find("#ulTaskList"));
			});

			//View Events
			this.$root.on("click","#btnAddTask", function(){
				_model.addTask($("#txtTask",that.$root).val())
			});

			this.$root.on("click","#btnRemoveCompleted", function(){
				_model.removeCompleted();
			});
		};

		this.render = function(){
			this.$root.append(template);
			return this;
		}

	}
});