requirejs.config({
		paths : {
			'handlebars' : '/scripts/vendor/handlebars',
			'jquery' : '/scripts/vendor/jquery',
			'app' : '/scripts/app'
			//'templates' : '/templates'
		},
		baseUrl : "/scripts/vendor",
		shim : {
			handlebars : {
				exports : 'Handlebars' /*Object reference in WINDOW*/
			}
		}
		
	});
    
require(['app/TaskManagerModel','app/TaskManagerView','jquery'],function(TaskManagerModel,TaskManagerView,$){
	$(function(){
    	var model = new TaskManagerModel();
	    var view = new TaskManagerView(model);
	    view.init();
	    view.render().$root.appendTo(document.body);
    })
});