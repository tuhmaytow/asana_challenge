$(document).ready(function(){
  $.ajax({
    method: 'GET',
    url: 'https://app.asana.com/api/1.0/projects/507623085822462/tasks',
    headers: {
      'Authorization': 'Bearer 0/0c60e78596a717c771c04c1c35b0a451'
    },
    success: function(result) {
      $('.card').find('.taskname').html(result.data.name);
      showTaskList(result.data);
      }
    });
  });

  $(document).ready(function() {
    $('button').click(function() {
      $('.task-list').stop(true).toggle('slow');
      $('.button').text(function(i, t) {
        return t == 'Show Task' ? 'Hide Task' : 'Show Task';
      });
    });
  });

  var showTaskList = function(taskList) {
    for(var i = 0; i < taskList.length; i++) {
      showTask(taskList[i]);
    }
  };

  var showTask = function(taskData){
      var taskList = $('.task-list');
      var card = $('<div></div>').addClass('card');
      var taskName = $('<div></div>').addClass('taskname');
      $(".task-list").on("click", "button.hide", function(){
        $(this).closest(".card").hide();
      });

      taskName.html(taskData.name);
      card.append(taskName);
      taskList.append(card);
      card.append("<button class='hide' type='button'>Hide Task</button>");
    };


  // var showTask = function(taskData){
  //   var taskList = $('.task-list');
  //   var card = $('<div></div>').addClass('card');
  //   var taskName = $('<div></div>').addClass('taskname');
  //
  //   taskName.html(taskData.name);
  //   card.append(taskName);
  //   taskList.append(card);
  // };
