$(document).ready(function() {
  // $(selector).jqueryFunction(param1, param2)
  // JavaScript: document.getElementById('body');
  // jQuery: $('#body')
  // JavaScript: document.getElementsByClassName('list-item')
  // $('.list-item')
  // JavaScript: document.getElementsByTagName('h1')
  // jQuery: $('h1')

  // best practice is to name variables with $ in front of them if using jquery
  var $numButtons = $('.num-button');
  var $opButtons = $('.op-button');
  var $eqButton = $('#eq-button');
  var $calcScreen = $('#calc-screen');
  // check to see if we have a leftSide setup
  // if not add to leftSide
  // if we have a leftSize and the user clicks op assign op
  // if we have a leftSide and op and user clicks number value assign rightSide
  // let user click equals 
  var leftSide, op, rightSide, result;

  $numButtons.click(function() {
    var print = $(this).text()
    $numButtons.removeClass('error-border');
    if(!leftSide) { 
      leftSide = print;
    } else if (leftSide && !op) {
      leftSide += print;
    } else if (leftSide && op && !rightSide) {
      rightSide = print;
    } else if (leftSide && op && rightSide) {
      rightSide += print;
    }
    $calcScreen.text(leftSide + ' ' + op + ' ' + rightSide);
  });

  $opButtons.click(function() {
    $opButtons.removeClass('error-border');
    if(!leftSide) {
      alert('You need a number');
      $numButtons.addClass('error-border');
    } else {
      op = $(this).text();
      $calcScreen.text(leftSide + ' ' + op + ' ' + rightSide);
    }
  });

  $eqButton.click(function() {
    if(leftSide && op && rightSide) {
      leftSide = parseInt(leftSide);
      rightSide = parseInt(rightSide);
      switch(op) {
        case '+':
          result = leftSide + rightSide;
          break;
        case '-':
          result = leftSide - rightSide;
          break;
        case '*':
          result = leftSide * rightSide;
          break;
        case '/':
          result = leftSide / rightSide;
          break;
        default:
          result = alert('You need an operator!')
      };
      $calcScreen.text(result);
    } else {
      if(!leftSide) {
        alert('You need a number!');
        $numButtons.addClass('error-border');
      } else if (leftSide && !op) {
        $opButtons.addClass('error-border');
      } else if ( leftSide && op && !rightSide) {
        alert('You need a number!');
        $numButtons.addClass('error-border');
      }
    }
  });
  
});
