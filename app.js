$(function(){
  var numOfButtons = 10;
  var firstPushedButton = null, secondPushedButton = null;

  function loadButtons(numOfButtons){
    for(var i = 0; i < numOfButtons; i++){
      $('.buttons').append('<button type="button" style="background-color:red" id="' + (i) + '">' + (i) + '</button>');
      $('.button' + i).css('background-color', 'red');
    }
  }

  function answer(firstPushedButton, secondPushedButton){
    var solution = parseInt(firstPushedButton) + parseInt(secondPushedButton);
    $('.answer').empty();
    $('.answer').append('<p>' + firstPushedButton + ' + ' + secondPushedButton + ' = ' + solution + '</p>');
    firstPushedButton = null;
    secondPushedButton = null;

  }

  $('.buttons').on('click', function(){
    // firstPushedButton = $('.buttons').id(this);
    if(firstPushedButton === null){
      firstPushedButton = (event.target.id);
      console.log(firstPushedButton);
    }
    else if(secondPushedButton === null){
      secondPushedButton = (event.target.id);
      console.log(secondPushedButton);
      answer(firstPushedButton, secondPushedButton);
    }
    else {
      firstPushedButton = null;
      secondPushedButton = null;

      firstPushedButton = (event.target.id);
      console.log(firstPushedButton);
    }

  });

  loadButtons(numOfButtons);
})
