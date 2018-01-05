$(document).ready(function(){
  $.ajax({
    method: "GET",
    url: "https://app.asana.com/api/1.0/projects/507623085822462/tasks",
    headers: {
      "Authorization": "Bearer 0/0c60e78596a717c771c04c1c35b0a451"
    },
    success: function(result) {
      $(".card").find(".taskname").html(result.data.name);
      showTaskList(result.data);
      }
    });
  });

  var showTaskList = function(taskList) {
    var i = 0;
    for(i = 0; i < taskList.length; i++) {
      showTask(taskList[i]);
    }
  };

  var showTask = function(taskData){
    var taskList = $(".task-list");

    var card = $('<div></div>').addClass('card');
    var taskName = $('<div></div>').addClass('taskname');
    taskName.html(taskData.name);
    card.append(taskName);
    taskList.append(card);
  };
